import { AuthService } from './../../services/auth.service'
import { isSubmittingSelector } from './../../store/selectors'
import { registerAction } from './../../store/actions/register.action'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log('isSubmitting ', this.isSubmitting$)
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })
    console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value))
    this.authService
      .register(this.form.value)
      .subscribe((currentUser: CurrentUserInterface) => {
        console.log('currentUser ', currentUser)
      })
  }
}
