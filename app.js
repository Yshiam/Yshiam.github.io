require('classlist-polyfill');
let Promise = require('bluebird');
let md = require('markdown').markdown.toHTML;
let workText = require('raw!./work.txt');
let pgpText = require('raw!./pgp.txt');
let headerHTML = require('raw!./header.html');
let styleText = [0, 1, 2, 3].map(function(i) { return require('raw!./styles' + i + '.css'); });
let preStyles = require('raw!./prestyles.css');
let replaceURLs = require('./lib/replaceURLs');
let writeChar = require('./lib/writeChar');

// Vars that will help us get er done
let isDev = window.location.hostname === 'localhost';
let speed = isDev ? 0 : 16;
let style, styleEl, workEl, pgpEl, skipAnimationEl, pauseEl;
let animationSkipped = false, done = false, paused = false;
let browserPrefix;

// Wait for load to get started.
document.addEventListener("DOMContentLoaded", function() {
  getBrowserPrefix();
  populateHeader();
  getEls();
  createEventHandlers();
  startAnimation();
});

async function startAnimation() {
  try {
    await writeTo(styleEl, styleText[0], 0, speed, true, 1);
    await writeTo(styleEl, styleText[1], 0, speed, true, 1);
  }
  // Flow control straight from the ghettos of Milwaukee
  catch(e) {
    if (e.message === "SKIP IT") {
      surprisinglyShortAttentionSpan();
    } else {
      throw e;
    }
  }
}

// Skips all the animations.
async function surprisinglyShortAttentionSpan() {
  if (done) return;
  done = true;
  pgpEl.innerHTML = pgpText;
  let txt = styleText.join('\n');

  // The work-text animations are rough
  style.textContent = "#work-text * { " + browserPrefix + "transition: none; }";
  style.textContent += txt;
  let styleHTML = "";
  for(let i = 0; i < txt.length; i++) {
     styleHTML = writeChar.handleChar(styleHTML, txt[i]);
  }
  styleEl.innerHTML = styleHTML;
  createWorkBox();

  // There's a bit of a scroll problem with this thing
  let start = Date.now();
  while(Date.now() - 1000 > start) {
    workEl.scrollTop = Infinity;
    styleEl.scrollTop = pgpEl.scrollTop = Infinity;
    await Promise.delay(16);
  }
}


/**
 * Helpers
 */

let endOfSentence = /[\.\?\!]\s$/;    //以.?!结尾的句子
let endOfBlock = /[^\/]\n\n$/;      //以双换行符结尾并且不包含‘/’

async function writeTo(el, message, index, interval, mirrorToStyle, charsPerInterval){
  if (animationSkipped) {
    // Lol who needs proper flow control
    throw new Error('SKIP IT');
  }
  // Write a character or multiple characters to the buffer.
  let chars = message.slice(index, index + charsPerInterval);//选取地址~地址+间隔 之间的字符
  index += charsPerInterval;  //将地址向后推进，推进到新的位置上

  // Ensure we stay scrolled to the bottom.
  el.scrollTop = el.scrollHeight;    //将el元素的滚动条的垂直位置设置为元素的完整高度，也就是说为了让要显示的这一行一直处于整个元素可视部分的最后一行

  // If this is going to <style> it's more complex; otherwise, just write.
  if (mirrorToStyle) {       
    writeChar(el, chars, style);   //把当前的chars写入el元素中，并满足修改Style
  } else {
    writeChar.simple(el, chars);   //无样式style情况下仅向el元素中写入chars即可
  }

if (index < message.length) {   //如果还没有超过message的长度边界
    let thisInterval = interval;       //this时间间隔=时间间隔
    let thisSlice = message.slice(index - 2, index + 1);    //选取当前位置-2到当前位置+1之间的字符
    if (endOfSentence.test(thisSlice)) thisInterval *= 70;  //如果thisSlice是句子结尾，那么时间间隔*70（也就是要在一句话结尾处多停顿一段时间）
    if (endOfBlock.test(thisSlice)) thisInterval *= 50;     //如果thisSlice是块结尾，那么时间间隔*50
    do {
      await Promise.delay(thisInterval);          //先异步执行一次delay，若pause为真，则一直停顿
    } while(paused);

    return writeTo(el, message, index, interval, mirrorToStyle, charsPerInterval);
  }
}

//
// Older versions of major browsers (like Android) still use prefixes. So we figure out what that prefix is
// and use it.
//
function getBrowserPrefix() {
  // Ghetto per-browser prefixing
  browserPrefix = require('./lib/getPrefix')();
  if (browserPrefix) {
    styleText = styleText.map(function(text) {
      return text.replace(/-webkit-/g, browserPrefix);
    });
  }
}

//
// Put els into the module scope.
//
function getEls() {    //获取元素
  // We're cheating a bit on styles.
  let preStyleEl = document.createElement('style'); //令preStytle为新创建的style
  preStyleEl.textContent = preStyles;    //将preStyleEl元素的文本内容设置为preStyles
  document.head.insertBefore(preStyleEl, document.getElementsByTagName('style')[0]);
  //在标签名称为style的元素的0位置前插入preStyleEl
  // El refs
  style = document.getElementById('style-tag');   //style标签
  styleEl = document.getElementById('style-text');   //这是我们输出显示的主体
  workEl = document.getElementById('work-text');    //其中一个BOX
  pgpEl = document.getElementById('pgp-text');      //另一个BOX
  skipAnimationEl = document.getElementById('skip-animation');   //跳过的按钮
  pauseEl = document.getElementById('pause-resume');    //暂停恢复的按钮
}   

//
// Create links in header (now footer).
//
function populateHeader() {  //移植网页头部
  let header = document.getElementById('header');
  header.innerHTML = headerHTML;
}

//
// Create basic event handlers for user input.
//
function createEventHandlers() {      //创建事件处理器
  // Mirror user edits back to the style element.
  styleEl.addEventListener('input', function() {   //对styleEl中添加输入监听器
    style.textContent = styleEl.textContent;    //将标签的文本和style元素中的文本同步
  });

  // Skip anim on click to skipAnimation
  skipAnimationEl.addEventListener('click', function(e) {    
    e.preventDefault();
    animationSkipped = true;
  });

  pauseEl.addEventListener('click', function(e) {
    e.preventDefault();
    if (paused) {
      pauseEl.textContent = "Pause ||";
      paused = false;
    } else {
      pauseEl.textContent = "Resume >>";
      paused = true;
    }
  });
}

//
// Fire a listener when scrolling the 'work' box.
//
function createWorkBox() {   //创建新的BOX
  if (workEl.classList.contains('flipped')) return;  //如果workEl中包含了flipped类（翻转）
  workEl.innerHTML = '<div class="text">' + replaceURLs(workText) + '</div>' +
                     '<div class="md">' + replaceURLs(md(workText)) + '<div>';

  workEl.classList.add('flipped');
  workEl.scrollTop = 9999;

  // flippy floppy
  let flipping = 0;
  require('mouse-wheel')(workEl, async function(dx, dy) {
    if (flipping) return;
    let flipped = workEl.classList.contains('flipped');
    let half = (workEl.scrollHeight - workEl.clientHeight) / 2;
    let pastHalf = flipped ? workEl.scrollTop < half : workEl.scrollTop > half;

    // If we're past half, flip the el.
    if (pastHalf) {
      workEl.classList.toggle('flipped');
      flipping = true;
      await Promise.delay(500);
      workEl.scrollTop = flipped ? 0 : 9999;
      flipping = false;
    }

    // Scroll. If we've flipped, flip the scroll direction.
    workEl.scrollTop += (dy * (flipped ? -1 : 1));
  }, true);
}
