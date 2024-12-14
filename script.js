const clock = () => {
    let d = new Date();

    let h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds();

    let hdeg = h * 30 + m * (1/2),
    mdeg = m * 6 + s * (1/10),
    sdeg = s * 6;

    let minHand = document.querySelector(".minute-hand-wrapper");
    let hrHand = document.querySelector(".hour-hand-wrapper");
    let secHand = document.querySelector(".second-hand-wrapper");

    hrHand.style.transform = `rotate(${hdeg}deg)`;
    minHand.style.transform = `rotate(${mdeg}deg)`;
    secHand.style.transform = `rotate(${sdeg}deg)`;

}

setInterval("clock()", 1000);
