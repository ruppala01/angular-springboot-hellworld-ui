import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import {EmployeeComponent} from './employee/employee.component'
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import {LoginComponent} from './login/login.component'
import {LogoutComponent} from './logout/logout.component'
const routes:Routes =[
  { path:'',component:LoginComponent},
  {path :'employees',component:EmployeeComponent},
  {path :'addEmployee',component: AddEmployeeComponent},
  {path :'logout',component: LogoutComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}

