//--librery
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//--router
import { AppRoutingModule } from './app-routing.module';

//--components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoreComponent } from './components/more/more.component';
import { CardComponent } from './components/elements/card/card.component';
import { NavComponent } from './components/elements/nav/nav.component';
import { SearchComponent } from './components/elements/search/search.component';
import { AudioComponent } from './components/elements/audio/audio.component';

//--pipes
import { VerificarImgPipe } from './pipes/verificar-img.pipe';
import { ConvertirsmtomPipe } from './pipes/convertirsmtom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MoreComponent,
    CardComponent,
    NavComponent,
    SearchComponent,
    AudioComponent,
    VerificarImgPipe,
    ConvertirsmtomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
