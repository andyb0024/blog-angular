import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'post/:slug', component: PostdetailComponent},
  { path: '', redirectTo: '/post', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
