import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditationComponent } from './meditation/meditation.component';
import { StartComponent } from './start.component';

const routes: Routes = [
  { path:'', component: StartComponent },
  { path:'meditate', component: MeditationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
