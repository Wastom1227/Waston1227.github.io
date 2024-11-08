let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let timeE1 = document.querySelector(".time");
let dateE1 = document.querySelector(".date");
let toggle = document.querySelector(".toggle");

let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];


toggle.addEventListener('click', (e) => {
    //root element
        let html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
            e.target.innerHTML = 'Dark mode'
        } else {
            html.classList.add('dark')
            e.target.innerHTML = 'Light mode'
        }
    })


    
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
        
        // 時
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`;
      
        // 分
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
      
        // 秒
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)`;
        
        timeE1.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
        dateE1.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
    }
      

let scale = (number, inMin, inMax, outMin, outMax)=>{
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();
    
setInterval(setTime, 1000);