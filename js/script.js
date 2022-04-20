function update() {
    if ($(window).scrollTop() > 50) {
      $('.one').addClass('active');
    } else {
      $('.one').removeClass('active');
    }
  }
  setInterval(update, 100);