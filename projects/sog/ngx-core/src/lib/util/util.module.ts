import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UtilModule { }
