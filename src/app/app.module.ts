import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClubSelectionComponent } from './club-selection/club-selection.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { TopicComponent } from './topic/topic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewhomeComponent } from './newhome/newhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { DiscovercComponent } from './discoverc/discoverc.component';
import { CreatecComponent } from './createc/createc.component';
import { SettingComponent } from './setting/setting.component';
import { PageComponent } from './page/page.component';
import { HelpComponent } from './help/help.component';
import { SeeClubsComponent } from './see-clubs/see-clubs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClubSelectionComponent,
    HomepageComponent,
    TopicComponent,

      NewhomeComponent,
        NavbarComponent,
        HomeComponent,
        ProfileComponent,
        AboutComponent,
        DiscovercComponent,
        CreatecComponent,
        SettingComponent,
        PageComponent,
        HelpComponent,
        SeeClubsComponent,
        ForgotPasswordComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
