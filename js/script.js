const menuBtn = document.querySelector('#menuBtn')
const header = document.querySelector('header')
const themeToggle = document.querySelector('#themeToggle')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('fa-times')
  header.classList.toggle('active')
})

themeToggle.onclick = () => {
  themeToggle.classList.toggle('fa-sun')
  if (themeToggle.classList.contains('fa-sun')) {
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active')
  }
}

window.onscroll = () => {
  menuBtn.classList.remove('fa-times')
  header.classList.remove('active')
  if ($(window).scrollTop() > 0) {
    $('.top').show()
  } else {
    $('.top').hide()
  }
}

const loading = document.getElementById('loading')
preload = () => {
  loading.style.display='none'
}