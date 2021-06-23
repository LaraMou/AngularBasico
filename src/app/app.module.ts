import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Angular Material modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { ListContactsComponent } from './pages/contacts-page/list-contacts/list-contacts.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AddContactComponent } from './pages/contacts-page/add-contact/add-contact.component';
import { TaskComponent } from './pages/todos-page/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContactComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    TodosPageComponent,
    ListContactsComponent,
    CapitalizePipe,
    AddContactComponent,
    TaskComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // We import HttpClientModule to perform http requests
    HttpClientModule,
    // We import ReactiveFormsModule to create Advanced Forms
    ReactiveFormsModule,
    FormsModule,
    // Angular Material Modules
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
