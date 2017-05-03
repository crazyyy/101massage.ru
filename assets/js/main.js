hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.outlineType = 'rounded-white';
hs.fadeInOut = true;
hs.dimmingOpacity = 0.75;

$(function() {

  function callBack() {
    return hs.htmlExpand(this, {
      src: this.href + '?ajax=true',
      objectType: 'iframe',
      wrapperClassName: 'draggable-header'
    });
  }

  if (readCookie('callback') == undefined) {
    setTimeout(function() {
        $('.callback-but').trigger('click');
        createCookie('callback', 1);
      },
      20000);
  }

  $('.callback-but').on('click', callBack);

});
