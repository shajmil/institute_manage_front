import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{
path:'',component:LoginComponent
},{
  path:'registration',component:RegistrationComponent
},

{
  path:'dashboard',component:DashboardComponent
},
{
  path:'orders',component:OrdersComponent
},
{
  path:'about',component:AboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
