const burger = () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__nav_item'),
    hamburger = document.querySelector('.hamburger'),
    btnForDesctop = document.querySelector('.btnForDesctop'),
    btnForMobile = document.querySelector('.btnForMobile');

    hamburger.addEventListener('click', () => {        
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav_active');
        if (hamburger.classList.contains('hamburger_active')) {
            document.body.style.overflow = 'hidden';
            btnForDesctop.style.display = 'none';
            btnForMobile.style.display = 'flex';
        } else {
            document.body.style.overflow = '';
            btnForDesctop.style.display = 'block';
            btnForMobile.style.display = 'none';

        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    });
};

export default burger;