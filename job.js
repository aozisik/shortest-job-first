/**
    @author Ahmet Özışık <ozisikahmet@gmail.com>
*/
class Job {
    constructor(name, start, length) {
        this.name = name;
        this.start = start;
        this.length = length;
        this.progress = 0;
        this.idle = 0;
        this.log = [];
    }

    done() {
        return this.progress === this.length;
    }

    ready(t) {
        this.log[t] = 'none';
        return t >= this.start && !this.done();
    }

    wait() {
        this.log[this.log.length - 1] = 'wait';
        this.idle++;
    }

    do() {
        this.log[this.log.length - 1] = 'do';
        this.progress++;
        return this.done();
    }

    remaining() {
        return this.length - this.progress;
    }
}
