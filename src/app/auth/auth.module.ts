import { AuthService } from './services/auth.service'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { RegisterComponent } from './components/register/register.component'
import { reducers } from './store/reducers'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers)
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {}
