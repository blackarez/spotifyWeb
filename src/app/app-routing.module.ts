import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoreComponent } from './components/more/more.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'more/:albumId', component:MoreComponent},
  { path:'' , pathMatch:'full' , redirectTo:'login'},
  { path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
