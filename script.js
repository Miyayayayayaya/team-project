document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.menu-button');
    const sideMenu = document.querySelector('.side-menu');

    if (hamburgerMenu && sideMenu) {
        hamburgerMenu.addEventListener('click', function() {
            sideMenu.classList.toggle('open');
            hamburgerMenu.classList.toggle('active');
        });

        // サイドメニュー内のリンクをクリックしたらメニューを閉じる
        sideMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('open');
                hamburgerMenu.classList.remove('active');
            });
        });

        // サイドメニューの外側をクリックしたらメニューを閉じる
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = sideMenu.contains(event.target);
            const isClickOnHamburger = hamburgerMenu.contains(event.target);

            if (!isClickInsideMenu && !isClickOnHamburger && sideMenu.classList.contains('open')) {
                sideMenu.classList.remove('open');
                hamburgerMenu.classList.remove('active');
            }
        });
    }
});