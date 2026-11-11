function navigateTo(viewName) {
    const homeView = document.getElementById('home-view');
    const errorView = document.getElementById('404-view');
    const navHome = document.getElementById('nav-home');

    if (viewName === 'home') {
        homeView.classList.add('active');
        errorView.classList.remove('active');
        navHome.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === '404') {
        homeView.classList.remove('active');
        errorView.classList.add('active');
        navHome.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}