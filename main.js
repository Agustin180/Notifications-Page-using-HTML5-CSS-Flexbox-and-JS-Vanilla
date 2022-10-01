const marked = document.getElementById('color-alert');
const notifications = document.querySelector('.notification-text-number')
const svg = document.querySelectorAll('.content-svg')
const bg = document.querySelectorAll('.people-content-ugeneral')

marked.addEventListener('click', () => {
    notifications.innerHTML = '0';
    for (let i = 0; i < bg.length; i++) {
        bg[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
      }
      for (let i = 0; i < svg.length; i++) {
        svg[i].style.visibility = 'hidden';
      }
})