import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ID } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersActions, UsersQuery } from 'src/app/shared';
import { CustomersDetailComponent } from '../customers-detail/customers-detail.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  vm$ = this.usersQuery.users$

  constructor(
    private actions: Actions,
    private usersQuery: UsersQuery,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.actions.dispatch(UsersActions.UsersGetAll);
  }

  public deleteUser(id: ID) {
    this.actions.dispatch(UsersActions.UsersDeleteOne({ id: id }));
  }

  public openDetailUser(id: ID) {
    this.modal.create({
      nzTitle: 'User Detail',
      nzContent: CustomersDetailComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        id: id
      }
    });
  }
}
