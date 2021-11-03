const refs = {
    daysNum: document.querySelector('[data-value="days"]'),
    hourNum: document.querySelector('[data-value="hours"]'),
    minNum: document.querySelector('[data-value="mins"]'),
    secNum: document.querySelector('[data-value="secs"]'),
    valuesBox: document.querySelector('div#timer-1'),
    values: document.querySelectorAll('div.field'),
}

refs.valuesBox.style = 'display: flex; justify-content: center;';
refs.values.forEach(value => {
    value.style = "display: flex; flex-direction: column; align-items: center; margin:10px;"
});


class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    getTime (val) {
        const days = Math.floor(val / (1000 * 60 * 60 * 24));
        const hours = Math.floor((val % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((val % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((val % (1000 * 60)) / 1000);
        const pad = function (num) {
                return String(num).padStart(2, '0');
        };
        return [pad(days), pad(hours), pad(mins), pad(secs)];
    }

    startTimer () {
        setInterval (() => {
            const currentDate = new Date ();
            const time = this.targetDate - currentDate;
            const timeForInterface = this.getTime(time);
            refs.daysNum.textContent = timeForInterface[0];
            refs.hourNum.textContent = timeForInterface[1];
            refs.minNum.textContent = timeForInterface[2];
            refs.secNum.textContent = timeForInterface[3]; 
        }, 1000);
    }
}

const timer = new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date(2021, 11, 31, 23, 59, 59),
});

timer.startTimer();
