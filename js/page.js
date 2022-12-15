function navToggle() {
    let navbar_nav = document.getElementById('site-nav');
    let trigram = document.getElementById('trigram');
    if (navbar_nav.className === 'nav-wrap') {
      navbar_nav.classList.add('mobile');
      trigram.classList.add('tri-mobile');
    } else {
      navbar_nav.classList = 'nav-wrap';
      trigram.classList = 'nav-link';
    }
  }