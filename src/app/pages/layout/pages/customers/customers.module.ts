import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { UsersEffect } from 'src/app/shared';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

const AKITA = [
  AkitaNgEffectsModule.forFeature([UsersEffect])
];

const ANTD = [
  NzTableModule,
  NzDividerModule,
  NzPopconfirmModule
];

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    AKITA,
    ANTD,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
