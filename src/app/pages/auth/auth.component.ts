import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions } from '@datorama/akita-ng-effects';
import { AuthActions } from 'src/app/shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private actions: Actions,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }


  public onSubmit() {
    if (this.formLogin.valid) {
      const model = this.formLogin.getRawValue();

      this.actions.dispatch(AuthActions.AuthLogin({ model: model }));
    }
  }
}
