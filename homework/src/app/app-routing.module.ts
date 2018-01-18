import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './component/login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { HomeComponent } from './home/home.component';
import { Pic2Component } from './pic2/pic2.component';
import { Pic4Component } from './pic4/pic4.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { IssueComponent } from './issue/issue.component';
import { Issue1Component } from './issue1/issue1.component';
import { Issue2Component } from './issue2/issue2.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login1',
    component: Login1Component
  },
  {
    path: 'login2',
    component: Pic2Component
  },
  {
    path: 'pic4',
    component: Pic4Component
  },
  {
    path: 'project2',
    component: Project2Component
  },
  {
    path: 'project3',
    component: Project3Component
  },
  {
    path: 'issue',
    component: IssueComponent
  },
  {
    path: 'issue1',
    component: Issue1Component
  },
  {
    path: 'issue2',
    component: Issue2Component
  },
  {
    path: 'pic2',
    component: Pic2Component
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
