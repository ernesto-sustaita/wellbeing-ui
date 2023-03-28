import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcentrateComponent } from './concentrate/concentrate.component';
import { MeditationComponent } from './meditation/meditation.component';
import { SetMeditationTimeComponent } from './set-meditation-time/set-meditation-time.component';
import { StartComponent } from './start.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path:'', component: StartComponent },
  { path:'set-meditation-time', component: SetMeditationTimeComponent},
  { path:'concentrate', component: ConcentrateComponent},
  { path: 'meditate/:minutes', component: MeditationComponent },
  { path: 'survey/:id', component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
