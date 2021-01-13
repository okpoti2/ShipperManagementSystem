import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import { ConsignmentDetailComponent } from './components/consignment-detail/consignment-detail.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {path:'', component: AuthenticationComponent},
  {path:'home', component: MainComponent},
  {path: 'consignment/:container' , component: ConsignmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
