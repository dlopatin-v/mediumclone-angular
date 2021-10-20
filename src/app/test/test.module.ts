import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TestComponent } from './components/test/test.component'

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TestComponent],
})
export class TestModule {}
