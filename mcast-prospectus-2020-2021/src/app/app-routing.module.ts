import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'landingpage', //http://localhost:4200/landingpage
    loadChildren: () => import('./prospectus/landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'menu', //http://localhost:4200/menu
    loadChildren: () => import('./prospectus/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'institutes', //http://localhost:4200/institutes
    loadChildren: () => import('./prospectus/institutes/institutes.module').then( m => m.InstitutesPageModule)
  },
  {
    path: 'institutes-info/:code', //http://localhost:4200/institutes-info/ias
    loadChildren: () => import('./prospectus/institutes-info/institutes-info.module').then( m => m.InstitutesInfoPageModule)
  },
  {
    path: 'courselevels', //http://localhost:4200/courselevels
    loadChildren: () => import('./prospectus/courselevels/courselevels.module').then( m => m.CourselevelsPageModule)
  },
  {
    path: 'about', //http://localhost:4200/about
    loadChildren: () => import('./prospectus/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'corporateservices', //http://localhost:4200/corporateservices
    loadChildren: () => import('./prospectus/corporateservices/corporateservices.module').then( m => m.CorporateservicesPageModule)
  },
  {
    path: 'kunsilstudentimcast', //http://localhost:4200/kunsilstudentimcast
    loadChildren: () => import('./prospectus/kunsilstudentimcast/kunsilstudentimcast.module').then( m => m.KunsilstudentimcastPageModule)
  },
  {
    path: 'ksmsmainaims', //http://localhost:4200/ksmsmainaims
    loadChildren: () => import('./prospectus/ksmsmainaims/ksmsmainaims.module').then( m => m.KsmsmainaimsPageModule)
  },
  {
    path: 'eventsatmcast', //http://localhost:4200/eventsatmcast
    loadChildren: () => import('./prospectus/eventsatmcast/eventsatmcast.module').then( m => m.EventsatmcastPageModule)
  },
  {
    path: 'principalandceo', //http://localhost:4200/principalandceo
    loadChildren: () => import('./prospectus/principalandceo/principalandceo.module').then( m => m.PrincipalandceoPageModule)
  },
  {
    path: 'president', //http://localhost:4200/presidenti
    loadChildren: () => import('./prospectus/president/president.module').then( m => m.PresidentPageModule)
  },
  {
    path: 'institutesummary', //http://localhost:4200/institutesummary
    loadChildren: () => import('./prospectus/institutesummary/institutesummary.module').then( m => m.InstitutesummaryPageModule)
  },
  {
    path: 'coursepageinfo/:code', //http://localhost:4200/coursepageinfo
    loadChildren: () => import('./prospectus/coursepageinfo/coursepageinfo.module').then( m => m.CoursepageinfoPageModule)
  },
  {
    path: 'course-levels/:code', // http://localhost:4200/course-levels/ias
    loadChildren: () => import('./prospectus/course-levels/course-levels.module').then( m => m.CourseLevelsPageModule)
  },
  {
    path: 'level-info/:code/:level', // http://localhost:4200/level-info/ias/1
    loadChildren: () => import('./prospectus/level-info/level-info.module').then( m => m.LevelInfoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
