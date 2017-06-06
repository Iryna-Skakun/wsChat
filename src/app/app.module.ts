import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatHandlerService } from './chat-handler.service'
import { ChatCommunicationService } from './chat-communication.service'

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

import { ConnectedGuard } from './connected.guard';
import { MessageInterceptorComponent } from './message-interceptor/message-interceptor.component';
import { PluginInterceptorComponent } from './plugin-interceptor/plugin-interceptor.component';
import { MessageViewComponent } from './message-view/message-view.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ChatViewComponent,
    LoginViewComponent,
    MessageInterceptorComponent,
    PluginInterceptorComponent,
    MessageViewComponent

  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChatHandlerService,
    ChatCommunicationService,
    ConnectedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
