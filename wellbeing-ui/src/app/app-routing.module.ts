import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcentrateComponent } from './concentrate/concentrate.component';
import { SetMeditationTimeComponent } from './set-meditation-time/set-meditation-time.component';
import { StartComponent } from './start.component';

const routes: Routes = [
  { path:'', component: StartComponent },
  { path:'set-meditation-time', component: SetMeditationTimeComponent},
  { path:'concentrate', component: ConcentrateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
