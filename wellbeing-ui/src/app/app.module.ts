import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StartComponent } from './start.component';
import { MeditationComponent } from './meditation/meditation.component';
import { ConcentrateComponent } from './concentrate/concentrate.component';
import { SetMeditationTimeComponent } from './set-meditation-time/set-meditation-time.component';
import { SnackBarDistractionComponent } from './snack-bar-distraction/snack-bar-distraction.component';
import { HttpClientModule } from '@angular/common/http';

import { MeditationSummaryComponent } from './meditation-summary/meditation-summary.component';
import { SurveyComponent } from './survey/survey.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MeditationComponent,
    ConcentrateComponent,
    SetMeditationTimeComponent,
    SnackBarDistractionComponent,
    MeditationSummaryComponent,
    SurveyComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
