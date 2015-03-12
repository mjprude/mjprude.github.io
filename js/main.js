var winHeight = $(window).height();
var winWidth = $(window).width();
var scrollPos = 0;
var $name;
var $profession;
var nameHeight;
var nameTop = 150;

$(function() {
  $name = $('#name')
  var namePos = $name.offset();
  $profession = $('#profession');
  nameHeight = parseInt($name.css('height').replace(/\D+/, ''));
  $profession.offset({top: winHeight-35})

  var profPos = $profession.offset();

  $(window).on('resize', function() {
    winHeight = $(window).height();
    winWidth = $(window).width();
    profPos = $profession.offset();
    namePos = $name.offset();
    scrollPos = $(window).scrollTop();
    nameHeight = parseInt($name.css('height').replace(/\D+/, ''));
  });

  $(window).on('scroll', function scroller() {
    scrollPos = $(window).scrollTop();
    profPos = $profession.offset();
    namePos = $name.offset();
    console.log('scrollPos: ' + scrollPos);
    console.log('profPos:', profPos);
    var offset = nameHeight + nameTop - 60;
    // var offset = 250;

    if (profPos.top - scrollPos < offset && $name.css('position') === 'fixed') {
      $name.css({
        position: 'relative',
        top: winHeight - 135
      })
    } else if (profPos.top - scrollPos > offset && $name.css('position') === 'relative') {
      $name.css({
        position: 'fixed',
        top: nameTop
      })
    }

    $('.tab').on('click', function() {
      var clicked = $(this).text();
      $('#headers').children().css('font-weight', 400)
      $(this).css('font-weight', 'bold')

      $('#content').children()
                   .fadeOut()
                   .promise()
                   .done(function() {
                     $('#'+clicked).fadeIn();   
                   });
    });

    $('#mari-link').on('click', function() {
      $('#headshot').fadeOut()
                    .promise()
                    .done(function() {       
                      winWidth = $(window).width();
                      $('#mari').fadeIn();
                      if (winWidth > 800) {
                        $('#about').addClass('columns').css('width', '90%');
                      }
      });
    });

  });

});
