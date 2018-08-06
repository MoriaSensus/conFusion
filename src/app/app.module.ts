import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { MaterialModule, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { HttpModule } from '@angular/http/src/http_module';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';
import { FeedbackService } from './services/feedback.service';
import { Feedback } from './shared/feedback';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    HighlightDirective
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MaterialModule,
      FlexLayoutModule,
      AppRoutingModule,
      FormsModule, 
      BrowserAnimationsModule,
      ReactiveFormsModule,
      RestangularModule.forRoot(RestangularConfigFactory)
  ],

  providers: [DishService, 
              PromotionService, 
              LeaderService, 
              FeedbackService,
              {provide: 'BaseURL', useValue: baseURL},
              ProcessHTTPMsgService],
              entryComponents: [LoginComponent],
              bootstrap: [AppComponent]
})
export class AppModule { }
