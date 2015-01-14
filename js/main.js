var winHeight = $(window).height();
var winWidth = $(window).width();
var scrollPos = 0;
var $name;
var $profession;

$(function() {
  $name = $('#name')
  var namePos = $name.offset();
  $profession = $('#profession')
  $profession.offset({top: winHeight-35})

  var profPos = $profession.offset();

  $(window).on('resize', function() {
    winHeight = $(window).height();
    winWidth = $(window).width();
    profPos = $profession.offset();
    namePos = $name.offset();
    scrollPos = $(window).scrollTop();
  });

  $(window).on('scroll', function scroller() {
    scrollPos = $(window).scrollTop();
    profPos = $profession.offset();
    namePos = $name.offset();
    console.log('scrollPos: ' + scrollPos);
    console.log('profPos:', profPos)

    if (profPos.top - scrollPos <  250 && $name.css('position') === 'fixed') {
      $name.css({
        position: 'relative',
        top: winHeight - 135
      })
    } else if (profPos.top - scrollPos >  250 && $name.css('position') === 'relative') {
      $name.css({
        position: 'fixed',
        top: 150
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
                      $('#about').addClass('columns').css('width', '90%');
                      $('#mari').fadeIn();
                    });
    });

  });

});