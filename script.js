class stopwatch{
    constructor(state){
        this.state = state;

        this.handleClickStart = this.handleClickStart.bind(this);
        document.getElementById("start").addEventListener("click", this.handleClickStart);

        this.handleClickStop = this.handleClickStop.bind(this);
        document.getElementById("stop").addEventListener("click", this.handleClickStopt);

        this.handleClickReset = this.handleClickReset.bind(this);
        document.getElementById("reset").addEventListener("click", this.handleClickReset);

        this.tick = this.tick.bind(this);
        this.render();

        /* this.requestAnimationID = null; */
    }
}
