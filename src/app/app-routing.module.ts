import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComicComponent } from './add-comic/add-comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ComicListComponent, pathMatch: 'full' },
  { path: 'add-comic', component: AddComicComponent },
  { path: 'edit-comic', component: AddComicComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
