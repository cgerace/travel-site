class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.siteHeader = document.querySelector('.site-header');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        console.log('The icon was clicked');
        this.menuContent.classList.toggle('site-header__menu-content--visible');
        this.siteHeader.classList.toggle('site-header--expanded');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
}

export default MobileMenu;