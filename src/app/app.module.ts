import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForumComponent } from './components/forum/forum.component';
import { AvatarizePipe } from './pipes/avatarize.pipe';
import { WriteComponent } from './components/write/write.component';
import { ReplayComponent } from './components/replay/replay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    AvatarizePipe,
    WriteComponent,
    ReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
