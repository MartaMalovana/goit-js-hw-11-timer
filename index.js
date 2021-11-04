class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.daysNum = document.querySelector('[data-value="days"]');
        this.hourNum = document.querySelector('[data-value="hours"]');
        this.minNum = document.querySelector('[data-value="mins"]');
        this.secNum = document.querySelector('[data-value="secs"]');
        this.valuesBox = document.querySelector('div#timer-1');
        this.values = document.querySelectorAll('div.field');
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
            this.daysNum.textContent = timeForInterface[0];
            this.hourNum.textContent = timeForInterface[1];
            this.minNum.textContent = timeForInterface[2];
            this.secNum.textContent = timeForInterface[3]; 
            this.getBoxStyle();
        }, 1000);
    }

    getBoxStyle () {
        this.valuesBox.style = 'display: flex; justify-content: center;';
        this.values.forEach(value => {
            value.style = "display: flex; flex-direction: column; align-items: center; margin:10px;"
        });
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 11, 31, 23, 59, 59),
});

timer.startTimer();
