import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbListModule , NbIconModule, NbButtonModule ,NbCardModule, NbUserModule, NbStepperModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { MusicComponent } from './components/music/music.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ServicesComponent } from './components/services/services.component';
import { WhatsappbtnComponent } from './components/whatsappbtn/whatsappbtn.component';
import { WhyhireComponent } from './components/whyhire/whyhire.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricecardComponent } from './components/pricing/pricecard/pricecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ReviewsComponent,
    PricingComponent,
    MusicComponent,
    GallaryComponent,
    ServicesComponent,
    WhatsappbtnComponent,
    WhyhireComponent,
    ContactComponent,
    PricecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    NbUserModule,
    NbStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
