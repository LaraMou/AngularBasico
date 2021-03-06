import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ContactDetailPageComponent } from '../pages/contact-detail-page/contact-detail-page.component';
import { AddContactComponent } from '../pages/contacts-page/add-contact/add-contact.component';
import { ContactsPageComponent } from '../pages/contacts-page/contacts-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { TodosPageComponent } from '../pages/todos-page/todos-page.component';
import { ListComponent } from '../views/list/list.component';

/**
 * App Routes that load our Pages
 */
const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'register', // http:localhost:4200/register
    component: RegisterPageComponent
  },
  {
    path: 'contacts',  // http:localhost:4200/contacts
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/:id', // http:localhost:4200/contacts/1
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'add-contact/:id', // http:localhost:4200/todos
    component: AddContactComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'list-contacts', // http:localhost:4200/todos
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos', // http:localhost:4200/todos
    component: TodosPageComponent,
    canActivate: [AuthGuard],
   },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
