/*<![CDATA[*/
widgets.addOnloadEvent(function() {
  if (typeof jQuery == 'undefined') {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '/shared/s3/js/jquery-1.7.2.min.js';
    document.body.appendChild(s);
  }
});
/*]]>*/
