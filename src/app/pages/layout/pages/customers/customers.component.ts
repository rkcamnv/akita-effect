import { Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UsersActions, UsersQuery } from 'src/app/shared';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  vm$ = this.usersQuery.users$

  constructor(
    private actions: Actions,
    private usersQuery: UsersQuery
  ) { }

  ngOnInit(): void {
    this.getAllUsers();

    this.vm$.subscribe(res => {
      console.log("🚀 ~ file: customers.component.ts ~ line 23 ~ CustomersComponent ~ ngOnInit ~ res", res)

    })
  }

  private getAllUsers() {
    this.actions.dispatch(UsersActions.UsersGetAll);
  }
}
