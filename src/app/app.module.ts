import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular will not scan through all component files in your app folder, unless you have register/ import here
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }