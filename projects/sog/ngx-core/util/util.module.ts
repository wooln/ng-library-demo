import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';

import { NgxCoreModule} from '@sog/ngx-core/core'


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
