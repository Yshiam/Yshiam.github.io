module.exports = function() {
  // Thanks David Walsh
  var styles = window.getComputedStyle(document.documentElement, ''), //获取元素css值  （元素，伪类）
  pre = (Array.prototype.slice
        .call(styles)
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1];
  return '-' + pre + '-';
};
