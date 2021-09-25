import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable } from 'rxjs';
import { ModelUser, UsersActions, UsersQuery } from 'src/app/shared';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  @Input() id: ID = '';

  vm$!: Observable<ModelUser>;

  constructor(
    private actions: Actions,
    private usersQuery: UsersQuery
  ) {
  }

  ngOnInit(): void {
    this.vm$ = this.usersQuery.selectEntity(this.id);
    this.getUser();
  }

  private getUser() {
    if (this.id && !this.usersQuery.hasActive(this.id))
      this.actions.dispatch(UsersActions.UsersGetOne({ id: this.id }));
  }
}
