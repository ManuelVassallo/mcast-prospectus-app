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
  },
  {
    path: 'courselevels',
    loadChildren: () => import('./prospectus/courselevels/courselevels.module').then( m => m.CourselevelsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./prospectus/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'corporateservices',
    loadChildren: () => import('./prospectus/corporateservices/corporateservices.module').then( m => m.CorporateservicesPageModule)
  },
  {
    path: 'kunsilstudentimcast',
    loadChildren: () => import('./prospectus/kunsilstudentimcast/kunsilstudentimcast.module').then( m => m.KunsilstudentimcastPageModule)
  },
  {
    path: 'ksmsmainaims',
    loadChildren: () => import('./prospectus/ksmsmainaims/ksmsmainaims.module').then( m => m.KsmsmainaimsPageModule)
  },
  {
    path: 'eventsatmcast',
    loadChildren: () => import('./prospectus/eventsatmcast/eventsatmcast.module').then( m => m.EventsatmcastPageModule)
  },
  {
    path: 'principalandceo',
    loadChildren: () => import('./prospectus/principalandceo/principalandceo.module').then( m => m.PrincipalandceoPageModule)
  },
  {
    path: 'president',
    loadChildren: () => import('./prospectus/president/president.module').then( m => m.PresidentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
