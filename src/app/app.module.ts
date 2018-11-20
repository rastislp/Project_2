import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatRadioModule,
  MatExpansionModule} from '@angular/material';
import { InsertComponent } from './insert/insert.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [
  {
    path: 'Products',
    component: CatalogComponent
  },
  {
    path: 'Insert product',
    component: InsertComponent
  },
  {
    path: 'Feedback',
    component: FeedbackComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    InsertComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
