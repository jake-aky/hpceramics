const primaryHeader = document.querySelector('.hp--navbar');
const scrollWatcher = document.createElement('div');
scrollWatcher.classList.add('hp--navbar__scroll--watcher');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
  },
  { rootMargin: '10px 0px 0px 0px' },
);

navObserver.observe(scrollWatcher);
