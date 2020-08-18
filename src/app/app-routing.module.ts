import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentDataComponent } from './comment-data/comment-data.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PostsDataComponent } from './posts-data/posts-data.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { ChildrenComponent } from './children/children.component';
import {TableModuleModule} from './table-module/table-module.module';
const routes: Routes = [
  {path:'comment',component:CommentDataComponent},
  {path:'home',component:HomeComponent},
  {path:'post',component:PostsDataComponent},
  {path:'albums',component:AlbumsComponent,
  children:[ {path:'albumChild', component:ChildrenComponent}]},
  {path:'users',component:UsersComponent},
  {path:'',loadChildren:()=>import('./table-module/table-module.module').then(m=>m.TableModuleModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,TableModuleModule]
})
export class AppRoutingModule { }