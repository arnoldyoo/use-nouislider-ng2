import { Ng2NoUiSliderComponent } from './ng2-nouislider/ng2-nouislider.component';
import { DateFormatService } from './ng2-nouislider/formatter/date-format.service';
import { Ng2NoUiSliderInterface } from './ng2-nouislider/ng2-nouislider.interface';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

declare const noUiSlider: any;
declare const wNumb: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    sliderConfig: Ng2NoUiSliderInterface;
    dates: Array<any> = [];
    @ViewChild('nouislider') nouislider: Ng2NoUiSliderComponent;

    constructor(
        private dateformatS: DateFormatService
    ) {

        for (let i = 0; i < 30 ; i++) {
            this.dates.push(new Date(2018, 0, i, 1, i, i).getTime());
        }

    }
    // values: Array<any>, handle: number, unencoded: Array<any>, tap: boolean, positions: Array<any>
    startSomething =
    (values: Array<any>, handle: number, unencoded: Array<any>, tap: boolean, positions: Array<any>) => {
    };

    endSomething =
    (values: Array<any>, handle: number, unencoded: Array<any>, tap: boolean, positions: Array<any>) => {
    };

    updateSomething =
    (values: Array<any>, handle: number, unencoded: Array<any>, tap: boolean, positions: Array<any>) => {
    };

    ngOnInit() {
        this.sliderConfig = {
            range: {
                'min': this.dates[0],
                'max': this.dates[this.dates.length - 1]
            },
            step: 24  *  60 * 60 * 1000,
            start: [this.dates[0], this.dates[this.dates.length - 1]],
            connect: [false, true, false],
            tooltips: [true, true],
            behaviour: 'drag',
            slideEvent: [
                {
                    eventName: 'start',
                    uiSlideCallback: this.startSomething
                },
                {
                    eventName: 'end',
                    uiSlideCallback: this.endSomething
                },
                {
                    eventName: 'update',
                    uiSlideCallback: this.updateSomething
                }
            ],
            format: {
                to: this.dateformatS.toDateFormat, // default (2000/01/01)
                from: Number
            },
            pips: {
                mode: 'steps',
                density: 3,
                filter: this.dateformatS.dateFilter, // default 1 day is show
                format: {
                    to: this.dateformatS.toDateFormat,
                    from: Number
                }
            }
        };
  }

  setValue() {
    this.dates = [];
    for (let i = 0; i < 30 ; i++) {
        this.dates.push(new Date(2018, 0, i, 1, i, i).getTime());
    }
    console.log(this.dates);

    this.nouislider.slider.noUiSlider.updateOptions({
        range: {
            min: this.dates[0],
            max: this.dates[this.dates.length - 1]
        },
        start: [this.dates[10], this.dates[this.dates.length - 1]],
        format: {
                to: this.dateformatS.toDateFormat, // default (2000/01/01)
                from: Number
        }
    });
  }

  setOnlyValue() {
    this.nouislider.slider.noUiSlider.set([this.dates[4], this.dates[15]]);
  }
}
