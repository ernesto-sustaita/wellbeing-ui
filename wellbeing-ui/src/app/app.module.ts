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

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MeditationSummaryComponentComponent } from './meditation-summary-component/meditation-summary-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MeditationComponent,
    ConcentrateComponent,
    SetMeditationTimeComponent,
    SnackBarDistractionComponent,
    MeditationSummaryComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
