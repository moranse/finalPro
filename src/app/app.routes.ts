import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
   {path: '', component:CategoryComponent},
   {path: 'FormNew', component:FormComponent},
   {path: 'Form/:ID', component:FormComponent}
];
