const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');

const anniDate="5 May 2021"

function lovedays(){
    const Anniversary=new Date(anniDate);
    const currentDate=new Date();

    const totalSeconds=(currentDate-Anniversary)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;

}

//initial call
lovedays();

setInterval(lovedays,1000);