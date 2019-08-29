$(function() {

  $('scroll-btn').click(function() {
    var id = $('this').attr('href');
    var position = $(id).offset().top;
  });

  // ヘッダー

  $('#header').fadeIn(1500);

  var $bar = $('.bar');
  var $menu = $('#header-menu');
  var $mark = $('#close-mark');

  $bar.click(function() {
    $bar.removeClass('open');
    $bar.addClass('close');
    $mark.removeClass('close');
    $mark.addClass('open');
    $menu.slideDown();
  });

  $mark.click(function() {
    $mark.removeClass('open');
    $mark.addClass('close');
    $bar.removeClass('close');
    $bar.addClass('open');
    $menu.slideUp();
  });

  // トップ

// 遅らせる表示
  setTimeout(function() {
    $('#top-title').fadeIn(1000);
  }, 800);

  setTimeout(function() {
    $('#top-sub').fadeIn(1000);
  }, 800);

  setTimeout(function() {
    $('.top-btn').fadeIn(1000);
  }, 1200);

});
