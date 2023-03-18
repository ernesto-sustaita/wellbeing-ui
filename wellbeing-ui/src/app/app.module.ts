import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StartComponent } from './start.component';
import { MeditationComponent } from './meditation/meditation.component';
import { ConcentrateComponent } from './concentrate/concentrate.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MeditationComponent,
    ConcentrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
