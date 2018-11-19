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
  MatExpansionModule} from '@angular/material';
import { InsertComponent } from './insert/insert.component';
import { CustomersComponent } from './customers/customers.component';

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
    path: 'Customers',
    component: CustomersComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    InsertComponent,
    CustomersComponent
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
