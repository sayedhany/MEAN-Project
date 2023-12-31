import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { mat } from './mat';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './posts/post-list/post-list.component';
@NgModule({
  declarations: [AppComponent, PostCreateComponent, HeaderComponent, PostListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ...mat],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
