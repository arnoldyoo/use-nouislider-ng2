import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Ng2NoUiSliderInterface, Ng2NoUiSliderEventInterface } from './ng2-nouislider.interface';
import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

declare const noUiSlider: any;

@Component({
    selector: 'ng2-nouislider',
    template: `<div #slider></div>`,
    styleUrls: ['ng2-nouislider.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class Ng2NoUiSliderComponent implements OnChanges {
    slider: any;
    @Input() config: Ng2NoUiSliderInterface;
    @ViewChild('slider') sliderEl: ElementRef;

    constructor() {}

    ngOnChanges(values: SimpleChanges) {
        if (values.config.currentValue) {
            this.slider = this.sliderEl.nativeElement;
            this._createSlider(values.config.currentValue);
            if (values.config.currentValue.slideEvent) {
                this._setEvent(values.config.currentValue.slideEvent)
            }
        }
    }

    _createSlider(config: Ng2NoUiSliderInterface) {
        noUiSlider.create(this.slider, config);
    }

    _setEvent(event: Array<Ng2NoUiSliderEventInterface>) {
        event.map( (ev: Ng2NoUiSliderEventInterface) => {
            this.slider.noUiSlider.on(ev.eventName, ev.uiSlideCallback);
        })
    };
}
