/*
$(document).ready(function() {
 
});*/

function stars_() {
  console.log('main.js');
  var $star_rating = $('.star-rating .ok');

  var SetRatingStar = function () {
    return $star_rating.each(function () {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).removeClass('far fa-star').addClass('fas fa-star');
      } else {
        return $(this).removeClass('fas fa-star').addClass('far fa-star');
      }
    });
  };

  $star_rating.on('click', function () {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
  });

  SetRatingStar();
}