const menu = document.querySelector('.menu');
const topbar = document.querySelector('.topbar');
menu.addEventListener('click', () => {
  const open = topbar.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  topbar.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const bachelorsAchievements = document.querySelector('.bachelors-achievements');
const bachelorsCourseHeading = document.querySelector('.bachelors-course-heading');
const bachelorsCoursework = document.querySelector('.bachelors-coursework');
if (bachelorsAchievements && bachelorsCourseHeading && bachelorsCoursework) {
  bachelorsAchievements.after(bachelorsCourseHeading, bachelorsCoursework);
}

const openHashedDropdown = () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target?.matches('details.course-dropdown')) target.open = true;
};
openHashedDropdown();
window.addEventListener('hashchange', openHashedDropdown);
