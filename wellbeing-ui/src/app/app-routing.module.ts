import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcentrateComponent } from './concentrate/concentrate.component';
import { MeditationComponent } from './meditation/meditation.component';
import { StartComponent } from './start.component';

const routes: Routes = [
  { path:'', component: StartComponent },
  { path:'meditate', component: MeditationComponent},
  { path:'concentrate', component: ConcentrateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
