import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SkillsComponent } from './skills/skills.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './description/description.component';
import { CompletedComponent } from './completed/completed.component'
import { ContactFormService } from './contact-form.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HelloComponent,
    PortfolioComponent,
    RecommendationComponent,
    SkillsComponent,
    DialogComponent,
    DescriptionComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
