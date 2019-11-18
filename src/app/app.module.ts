import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ListComponent} from './components/list/list.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NavComponent} from './components/nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {LogoutComponent} from './components/logout/logout.component';
import {InterceptorService} from './auth/interceptor.service';
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    ListItemComponent,
    PaginatorComponent,
    PageNotFoundComponent,
    NavComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
    },
    User, UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
