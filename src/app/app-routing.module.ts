import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusPageComponent } from './status-page/status-page.component';


const routes: Routes = [
  { path: 'status', component: StatusPageComponent },
  { path: '', redirectTo: '/status', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
