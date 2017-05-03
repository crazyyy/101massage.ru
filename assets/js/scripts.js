// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.


$('.plain-form').on('submit', function(e) {
  e.preventDefault();


  $(this).addClass('current-form');


  var currForm = $(this),

    phone = $.trim($('#your-phone').val()),
    name = $.trim($('#your-name').val()),
    date = $.trim($('#your-date').val()),

    postData = $(this).serializeArray(),
    formURL = $(this).attr('action'),
    thanx = $('.online-form .thanx'),
    message = $('.online-form .message');

  $(message).fadeIn(200);

  if (name != null && name.length == 0) {
    $(message).addClass('message-err').html('Укажите имя');
    $('#your-name').addClass('input-error');
    event.preventDefault();
  } else if (phone != null && phone.length == 0) {
    $('#your-name').removeClass('input-error');
    $(message).addClass('message-err').html('Укажите телефон');
    $('#your-phone').addClass('input-error');
    event.preventDefault();
  } else if (date != null && date.length == 0) {
    $('#your-phone').removeClass('input-error');
    $('#your-name').removeClass('input-error');
    $(message).addClass('message-err').html('Укажите дату');
    $('#your-date').addClass('input-error');
    event.preventDefault();
  } else {




    $('#your-phone').removeClass('input-error');
    $('#your-name').removeClass('input-error');
    $('#your-date').removeClass('input-error');

        $(message).addClass('message-ok');
        $(message).html('Успешно отправилось!');
        $(message).fadeOut(1500);
        $(thanx).fadeIn(1500);


    // $.ajax({
    //   url: formURL,
    //   type: 'POST',
    //   data: postData,
    //   beforeSend: function() {
    //     $(message).html('Отправляем...');
    //   },
    //   success: function(data) {
    //     $(message).addClass('message-ok');
    //     $(message).html('Успешно отправилось!');
    //     $(message).fadeOut(1500);
    //     $(thanx).fadeIn(1500);
    //   }
    // });
  };
  $(this).removeClass('current-form');
});
