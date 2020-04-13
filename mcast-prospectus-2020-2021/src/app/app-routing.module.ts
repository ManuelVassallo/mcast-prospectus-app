import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'landingpage',
    loadChildren: () => import('./prospectus/landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./prospectus/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'institutes',
    loadChildren: () => import('./prospectus/institutes/institutes.module').then( m => m.InstitutesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
