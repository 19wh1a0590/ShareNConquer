import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubSelectionComponent } from './club-selection/club-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopicComponent } from './topic/topic.component';
import{NewhomeComponent} from './newhome/newhome.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import{AboutComponent} from './about/about.component';
import { DiscovercComponent } from './discoverc/discoverc.component';
import { CreatecComponent } from './createc/createc.component';
import { SettingComponent } from './setting/setting.component';
import { PageComponent } from './page/page.component';
import { HelpComponent } from './help/help.component';
import { SeeClubsComponent } from './see-clubs/see-clubs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// const routes: Routes = [
//   // {path:'',component: LoginComponent},
// {path:'login',
// children:[{path:'', component: LoginComponent},
// {path:'register', component: RegisterComponent}]}];
// {path:'register', component: RegisterComponent}];
const routes: Routes = [
  {path:'', component: NewhomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'about',component:AboutComponent},
  {path:'newhome', component:NewhomeComponent},
  {path:'discoverc', component:DiscovercComponent},
  {path:'createc',component:CreatecComponent},
  {path:'see-clubs',component:SeeClubsComponent},
  {path:'setting', component:SettingComponent},
  {path:'page',component:PageComponent},
  {path:'help',component:HelpComponent},
  {path:'forgotPwd',component:ForgotPasswordComponent},
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
