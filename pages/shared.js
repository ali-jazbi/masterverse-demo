(() => {
  const pages = [
    ['01-results-achievements.html', 'نتایج و دستاوردها'],
    ['02-teacher-mobile-dashboard.html', 'داشبورد دبیر · موبایل'],
    ['03-student-home-dark.html', 'خانهٔ دانش‌آموز · تاریک'],
    ['04-onboarding-dark.html', 'خوش‌آمدگویی · تاریک'],
    ['05-biorush-quiz.html', 'آزمون BioRush'],
    ['06-bioduel-live-arena.html', 'میدان BioDuel'],
    ['07-live-pulse-dashboard.html', 'دیده‌بان زندهٔ دبیر'],
    ['08-results-achievements-dark.html', 'نتایج و دستاوردها · تاریک'],
    ['09-onboarding-track-selection.html', 'خوش‌آمدگویی و انتخاب رشته'],
    ['10-student-home-dashboard.html', 'داشبورد دانش‌آموز'],
    ['11-bioduel-live-arena-dark.html', 'میدان BioDuel · تاریک'],
    ['12-question-bank-studio.html', 'بانک سوالات'],
    ['13-subjects-chapters.html', 'درس‌ها و فصل‌ها'],
    ['14-classes-mobile.html', 'کلاس‌ها · موبایل'],
    ['15-teacher-portal-mobile.html', 'ورود دبیر · موبایل'],
    ['16-students-ranks.html', 'دانش‌آموزان و رتبه‌ها'],
    ['17-students-mobile.html', 'دانش‌آموزان · موبایل'],
    ['18-classes-groups.html', 'کلاس‌ها و گروه‌ها'],
    ['19-bioleague-leaderboard.html', 'لیگ و رتبه‌بندی'],
    ['20-profile-rewards-store.html', 'پروفایل و جوایز'],
  ];
  const current = decodeURIComponent(location.pathname.split('/').pop() || '').toLowerCase();
  const root = document.createElement('div');
  root.id = 'site-pages-nav';
  root.innerHTML = `
    <button class="site-pages-nav__trigger" type="button" aria-label="باز کردن فهرست صفحه‌ها" aria-expanded="false" aria-controls="site-pages-nav-panel">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="7" height="6.5" rx="1.5"></rect><rect x="13.5" y="4" width="7" height="6.5" rx="1.5"></rect><rect x="3.5" y="13.5" width="7" height="6.5" rx="1.5"></rect><rect x="13.5" y="13.5" width="7" height="6.5" rx="1.5"></rect></svg>
    </button>
    <nav class="site-pages-nav__panel" id="site-pages-nav-panel" aria-label="پیمایش صفحه‌های MasterVerse">
      <h2 class="site-pages-nav__heading">جابجایی بین صفحه‌ها</h2>
      <ul class="site-pages-nav__list">${pages.map(([file, label]) => {
        const active = file.toLowerCase() === current;
        return `<li><a class="site-pages-nav__link" href="${file}"${active ? ' aria-current="page"' : ''}><span>${label}</span>${active ? '<span class="site-pages-nav__current" aria-hidden="true"></span>' : ''}</a></li>`;
      }).join('')}</ul>
    </nav>`;
  document.body.append(root);

  const button = root.querySelector('.site-pages-nav__trigger');
  const setOpen = (open) => {
    root.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  };
  button.addEventListener('click', () => setOpen(!root.classList.contains('is-open')));
  root.addEventListener('focusin', (event) => {
    if (event.target !== button) setOpen(true);
  });
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) setOpen(false);
  });
  document.addEventListener('pointerdown', (event) => {
    if (!root.contains(event.target)) setOpen(false);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      button.focus();
    }
  });
})();
