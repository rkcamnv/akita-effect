import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const ANTD = [
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ANTD,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
