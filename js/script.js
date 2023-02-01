const html = document.querySelector('html');
const togglerBtn = document.querySelector('#toggler');
const darkIcon = document.querySelector('#theme-toggle-dark-icon');
const lightIcon = document.querySelector('#theme-toggle-light-icon');

if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  lightIcon.classList.remove('hidden');
  darkIcon.classList.add('hidden');
} else if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  darkIcon.classList.remove('hidden');
  lightIcon.classList.add('hidden');
}

togglerBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.className.includes('dark')) {
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
    localStorage.setItem('theme', 'dark');
    return;
  }
  lightIcon.classList.remove('hidden');
  darkIcon.classList.add('hidden');
  localStorage.setItem('theme', 'light');
});
