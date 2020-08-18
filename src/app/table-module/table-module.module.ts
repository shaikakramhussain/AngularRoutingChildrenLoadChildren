import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDataComponent } from './users-data/users-data.component';
import { AlbumsDataComponent } from './albums-data/albums-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import {RouterModule} from '@angular/router';
import { AlbumsChildComponent } from './albums-child/albums-child.component';

const routes= [
  {path:'usersParent',component:UsersDataComponent},
  {path:'albumsParent', component:AlbumsDataComponent,
   children:[{path:'albumsChild',component:AlbumsChildComponent}]
  },
  {path:'postDataParent',component:PostDataComponent}
];

@NgModule({
  declarations: [UsersDataComponent, AlbumsDataComponent, PostDataComponent, AlbumsChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModuleModule { }
