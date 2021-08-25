import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
