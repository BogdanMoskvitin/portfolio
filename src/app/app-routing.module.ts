import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { DescriptionComponent } from './description/description.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'description', component: DescriptionComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'dialog', component: DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
