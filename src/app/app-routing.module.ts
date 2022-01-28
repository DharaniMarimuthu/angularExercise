import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TryComponent } from './trying';

const routes: Routes = [
  // {path:'',redirectTo:'employeeList',pathMatch: 'full'},
  {path:'',component:ProductListComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"employeeList",component:EmployeeListComponent},
  {path:"productList",component:ProductListComponent},
  {path:"productAdd",component:ProductAddComponent},
  {path:"productEdit/:productId",component:ProductAddComponent},
  {path:"others",component:TryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
