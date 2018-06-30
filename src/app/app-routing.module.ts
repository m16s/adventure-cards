import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLibraryComponent } from './containers/page-library/page-library.component';
import { PageAdventureComponent } from './containers/page-adventure/page-adventure.component';

const routes: Routes = [
  {
    path: '',
    component: PageLibraryComponent,
  },
  {
    path: 'adventure/:id',
    component: PageAdventureComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
