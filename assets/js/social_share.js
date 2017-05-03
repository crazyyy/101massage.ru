/*Share buttons */
$(document).ready(function() {
  Share = {
    vkontakte: function() {
      url = 'http://vkontakte.ru/share.php?';
      url += 'url=' + encodeURIComponent(window.location);
      url += '&title=' + encodeURIComponent(Share.getTitle());
      url += '&description=' + encodeURIComponent('');
      url += '&image=' + encodeURIComponent(Share.getImageUri());
      url += '&noparse=true';
      Share.popup(url);
    },
    facebook: function() {
      url = 'http://www.facebook.com/sharer.php?s=100';
      url += '&p[title]=' + encodeURIComponent(Share.getTitle());
      url += '&p[summary]=' + encodeURIComponent('');
      url += '&p[url]=' + encodeURIComponent(window.location);
      url += '&p[images][0]=' + encodeURIComponent(Share.getImageUri());
      Share.popup(url);
    },
    twitter: function() {
      url = 'http://twitter.com/share?';
      url += 'text=' + encodeURIComponent(Share.getTitle());
      url += '&url=' + encodeURIComponent(window.location);
      url += '&counturl=' + encodeURIComponent(window.location);
      Share.popup(url);
    },

    odnoklassniki: function(purl, text) {
      url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
      url += '&st.comments=' + encodeURIComponent(text);
      url += '&st._surl=' + encodeURIComponent(purl);
      Share.popup(url);
    },

    popup: function(url) {
      window.open(url, 'displayWindow', 'toolbar=0,status=0,width=626,height=436');
    },
    getImageUri: function() {
      return $('meta[name="og:image"]').attr('content');
    },
    getTitle: function() {
      return $('meta[name="og:title"]').attr('content');
    },
    getDescription: function() {
      return $('meta[name="og:description"]').attr('content');

    }
  };


  $('.share--fb').click(function() {
    Share.facebook();
  });

  $('.share--vk').click(function() {
    Share.vkontakte();
  });

  $('.share--tw').click(function() {
    Share.twitter();
  });

  $('.share--ok').click(function() {
    Share.odnoklassniki();
  });

});
/*End share buttons*/
