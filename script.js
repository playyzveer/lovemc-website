/* COPY IP */

const copyBtn = document.querySelector(".copy-ip");

if(copyBtn){

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText("play.lovemc.fun");

        copyBtn.innerText = "COPIED!";

        setTimeout(() => {

            copyBtn.innerText = "COPY IP";

        },2000);

    });

}

/* FALLING HEARTS */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["💖","💕","💗","💘","🌸"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    document.querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },15000);

}

setInterval(createHeart, 400);
async function updateServerStatus(){
    try{
        const response = await fetch("https://api.mcsrvstat.us/3/play.lovemc.fun");
        const data = await response.json();

        if(data.online){
            document.getElementById("server-status").innerText = "Online";
            document.getElementById("server-players").innerText =
                data.players.online + " / " + data.players.max;
        }else{
            document.getElementById("server-status").innerText = "Offline";
            document.getElementById("server-players").innerText = "0 / 0";
        }
    }catch(error){
        document.getElementById("server-status").innerText = "Error";
        document.getElementById("server-players").innerText = "Unavailable";
    }
}

updateServerStatus();
setInterval(updateServerStatus, 60000);
function togglePerks(card){
    card.classList.toggle("active");
}
function updateRewardCountdown(){

    const countdown = document.getElementById("reward-countdown");

    if(!countdown){
        return;
    }

    const now = new Date();

    const target = new Date();
    target.setHours(16, 0, 0, 0);

    const day = target.getDay();
    const daysUntilSunday = (7 - day) % 7;

    target.setDate(target.getDate() + daysUntilSunday);

    if(now > target){
        target.setDate(target.getDate() + 7);
    }

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerText =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateRewardCountdown();
setInterval(updateRewardCountdown, 1000);
function updateRewardCode(){

    const code = document.getElementById("reward-code");
    const btn = document.getElementById("copy-code-btn");
    const info = document.getElementById("reward-info");

    if(!code || !btn || !info){
        return;
    }

    const now = new Date();

    const start = new Date();
    start.setHours(16,0,0,0);

    const day = start.getDay();
    const daysUntilSunday = (7 - day) % 7;

    start.setDate(start.getDate() + daysUntilSunday);

    const end = new Date(start);
    end.setHours(20,0,0,0);

    if(now >= start && now <= end){

        code.innerText = "LOCKED";
        btn.style.display = "inline-block";
        info.innerText = "Reward code is currently active.";

    }else{

        code.innerText = "LOCKED";
        btn.style.display = "none";
        info.innerText = "Code will unlock on Sunday at 4:00 PM IST.";
    }
}

updateRewardCode();
setInterval(updateRewardCode, 1000);

const weeklyCopyBtn = document.getElementById("copy-code-btn");

if(weeklyCopyBtn){

    weeklyCopyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText("LOCKED");

        weeklyCopyBtn.innerText = "COPIED!";

        setTimeout(() => {
            weeklyCopyBtn.innerText = "COPY CODE";
        }, 2000);

    });

}