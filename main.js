const menu = document.querySelector('.menu-bar');
const navBar = document.querySelector('nav');

menu.addEventListener('click', () => {
  if (menu.classList.contains('fa-bars')) {
    menu.classList.replace('fa-bars', 'fa-x');
    menu.classList.toggle('active');
    navBar.style.left = `0`;
  } else if (menu.classList.contains('fa-x')) {
    menu.classList.replace('fa-x', 'fa-bars')
    menu.classList.toggle('active');
    navBar.style.left = `-100%`;
  }
});

const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secsHand = document.querySelector('.secs-hand');
let date = new Date();


function setDate() {
  date = new Date();
  const seconds = date.getSeconds();
  const secDegree = (seconds/60)* 360+270;
  secsHand.style.transform = `rotate(${secDegree}deg)`;
  
  const minutes = date.getMinutes();
  const minDegree = (minutes/60) * 360 + 270
  minsHand.style.transform = `rotate(${minDegree}deg)`;
  
  const hours = date.getHours();
  const hourDegree = (hours/12)*360+270;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();


const analogClock = document.querySelector('.analog-clock');
const digitalClock = document.querySelector('.digital-clock')
const dateContent = document.querySelector('.date');


setInterval(() => {
  dateContent.textContent = date.toLocaleTimeString();
}, 1000);


const btn = document.querySelector('.btn');
const btnIcon = document.querySelector('.btn-icon');

function changeClock() {
  if(!btn.classList.contains('active')) {
    digitalClock.style.display = 'block';
    analogClock.style.display = 'none';
    btn.classList.add('active');
    btnIcon.style.transform = `rotate(180deg)`;
  } else if (btn.classList.contains('active')) {
    digitalClock.style.display = 'none';
    analogClock.style.display = 'block';
    btn.classList.remove('active');
    btnIcon.style.transform = `rotate(-180deg)`;
  }
}

btn.addEventListener('click', () => changeClock());

const todayDate = document.querySelector('.today-date');
todayDate.textContent = date.toLocaleDateString();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const year = date.getFullYear();

const fullDate = document.querySelector('.full-date');
fullDate.textContent = `${days[date.getDay()]} ${months[date.getMonth()]}, ${year}`;

const darkBtn = document.querySelector('.dark');
const body = document.body;
const panel = document.querySelector('.panel');
const more = document.querySelector('.more');

function lightDark() {
  if (darkBtn.classList.contains('fa-moon')) {
    darkBtn.classList.replace('fa-moon', 'fa-sun');
    body.style.background = `#555`;
    navBar.style.left = `-100%`;
    menu.classList.replace('fa-x', 'fa-bars')
    fullDate.style.color = `#eee`;
    todayDate.style.color = `#eee`;
    digitalClock.style.color = `#eee`;
    dateContent.style.color = `#eee`;
    analogClock.style.borderColor = `#eee`;
  } else if (darkBtn.classList.contains('fa-sun')) {
    darkBtn.classList.replace('fa-sun', 'fa-moon');
    body.style.background = `rgba(200,200,200, 0.8)`;
    navBar.style.left = `-100%`;
    menu.classList.replace('fa-x', 'fa-bars')
    fullDate.style.color = `#383E8F`;
    todayDate.style.color = `#383E8F`;
    digitalClock.style.color = `#383E8F`;
    dateContent.style.color = `#383E8F`;
    analogClock.style.borderColor = `#383E8F`;
  }
}

darkBtn.addEventListener('click', () => lightDark());


more.addEventListener('click', () => {
  more.classList.toggle('show');
  panel.classList.toggle('active')
});
