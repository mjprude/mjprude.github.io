(function() {
  var parallax = {
    onScroll: function(anchor, pusher) {
      debugger
    }
  }

  var anchor = document.getElementById('name');
  var pusher = document.getElementById('profession');

  window.addEventListener('scroll', parallax.onScroll(anchor, pusher));
}(););
