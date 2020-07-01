import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {TestComponent} from './test/test.component'
import {FileComponent} from './file/file.component'
import {CreateComponent} from './create/create.component'
import {EditComponent} from './edit/edit.component'

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'test', component:TestComponent },  
  { path: 'file/:id', component:FileComponent },
  { path: 'file/edit/:id', component:EditComponent },
  { path: 'create', component:CreateComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
