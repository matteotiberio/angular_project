import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey-component.component';

const routes: Routes = [
  { path: 'list-clients', component: ListClientComponent }, // Riferimento a ListClientsComponent
  { path: 'login', component: LoginComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'list-clients', component: ListClientComponent } // Rotta predefinita (opzionale)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
