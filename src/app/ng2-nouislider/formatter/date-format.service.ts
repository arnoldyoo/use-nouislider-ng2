import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatService {
    weekdays: Array<string>;
    months: Array<string>;
    _isToggle: boolean = true;

    constructor() {
        this.weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        this.months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    }

    timestamp(str) {
        return new Date(str).getTime();
    }

    toDateFormat = ( value: string ) => {
        const date = new Date(value);
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} `;
        // return this.weekdays[date.getDay()] + '요일, ' +
        //     date.getDate()  + '일, ' +
        //     this.months[date.getMonth()] + '월 ' +
        //     date.getFullYear() + '년';
    };

    nth = (day: number) =>  {
        if (day > 3 && day < 21) {
            return 'th'
        }

        switch (day % 10) {
            case 1:  return 'st';
            case 2:  return 'rd';
            case 3:  return 'nd';
            default: return 'th';
        }
    };

    getDateStep(day: number) {
        return day * 24 * 60 * 60 * 1000;
    }

    dateFilter = (value: string, type) => {
        const date = new Date(value);
        if (date.getDate() % 2 === 0) {
            return value;
        }
    }

    dateToggleFilter = (value: string, type: any) => {
        if (this._isToggle) {
            this._isToggle = !this._isToggle;
            return value;
        } else {
            this._isToggle = !this._isToggle;
        }
    }
}
