var styleBuffer = '';
var fullTextStorage = {};

module.exports = function writeChar(el, char, style){
  // Grab text. We buffer it in storage so we don't have to read from the DOM every iteration.
  var fullText = fullTextStorage[el.id];
  if (!fullText) fullText = fullTextStorage[el.id] = el.innerHTML;

  fullText = module.exports.handleChar(fullText, char);
  // But we still write to the DOM every iteration, which can be pretty slow.
  el.innerHTML = fullTextStorage[el.id] = fullText;

  // Buffer writes to the <style> element so we don't have to paint quite so much.
  styleBuffer += char;
  if (char === ';') {
    style.textContent += styleBuffer;
    styleBuffer = '';
  }
};

module.exports.simple = function writeSimpleChar(el, char) {
  el.innerHTML += char;
};

let openComment = false;
let commentRegex = /(\/\*(?:[^](?!\/\*))*\*)$/;  //注释的正则表达式
let keyRegex = /([a-zA-Z- ^\n]*)$/;   //键值的正则表达式
let valueRegex = /([^:]*)$/;         // 参数的正则表达式
let selectorRegex = /(.*)$/;        //选择器的正则表达式
let pxRegex = /\dp/;              //像素的正则表达式
let pxRegex2 = /p$/;             // 像素的正则表达式2

module.exports.handleChar = function handleChar(fullText, char) {
  if (openComment && char !== '/') {    //如果可注释为真并且写入的字符不是/
    // Short-circuit during a comment so we don't highlight inside it.
    fullText += char;         //则在fulltext中添加该字符
  } else if (char === '/' && openComment === false) {    //如果写入字符等于/并且不可注释
    openComment = true;        //那么将注释置真
    fullText += char;          //fulltext中添加该字符
  } else if (char === '/' && fullText.slice(-1) === '*' && openComment === true) { //如果写入字符为/并且fulltext最后一个字符为*并且可注释    
    openComment = false;    //先将注释关闭    
    // Unfortunately we can't just open a span and close it, because the browser will helpfully
    // 'fix' it for us, and we'll end up with a single-character span and an empty closing tag.
    fullText = fullText.replace(commentRegex, '<span class="comment">$1/</span>');//将$1填入注释（用注释的正则表达式通过replace替换$1）
  } else if (char === ':') {  //如果出现冒号
    fullText = fullText.replace(keyRegex, '<span class="key">$1</span>:');
  } else if (char === ';') {   //如果出现分号
    fullText = fullText.replace(valueRegex, '<span class="value">$1</span>;');
  } else if (char === '{') {    //如果出现左括号
    fullText = fullText.replace(selectorRegex, '<span class="selector">$1</span>{');
  } else if (char === 'x' && pxRegex.test(fullText.slice(-2))) {   //如果出现的是x并且fulltext的倒数第二个字符是px
    fullText = fullText.replace(pxRegex2, '<span class="value px">px</span>');
  } else {
    fullText += char;   //都不是的话证明还不到进行判断的时候  fulltext就要继续向下进行
  }
  return fullText;
}
