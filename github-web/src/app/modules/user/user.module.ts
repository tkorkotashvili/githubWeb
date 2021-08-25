import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UserRoutingModule } from './user-routing.module';



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
