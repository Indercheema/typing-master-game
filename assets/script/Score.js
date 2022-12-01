'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

class Score {
    #date;
    #hits;
    #percentage;
    constructor(date, hits, percentage) {
        this.#date = date;
        this.#hits = hits;
        this.#percentage = percentage;
    }

    // set date(val){
    //     this.#date = val;
    // }

    get date() {
        return this.#date;
    }


    get hits() {
        return this.#hits;
    }

    get percentage() {
        return this.#percentage;
    }
    playerData() {
        return `Date : ${this.date} \n Your Hits : ${this.hits} \n Game Progress : ${this.percentage}`
    }

}

export {Score};
