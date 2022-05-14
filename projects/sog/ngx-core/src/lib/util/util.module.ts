import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';

import { NgxCoreModule} from '../core/ngx-core.module'


@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    NgxCoreModule,
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UtilModule { }
