import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2NoUiSliderComponent } from './ng2-nouislider/ng2-nouislider.component';
import { DateFormatService } from './ng2-nouislider/formatter/date-format.service';

@NgModule({
  declarations: [
    AppComponent, Ng2NoUiSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DateFormatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
