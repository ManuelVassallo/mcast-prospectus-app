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
    path: 'instituteofappliedscience', //http://localhost:4200/instituteofappliedscience
    loadChildren: () => import('./prospectus/instituteofappliedscience/instituteofappliedscience.module').then( m => m.InstituteofappliedsciencePageModule)
  },
  {
    path: 'coursepageinfo', //http://localhost:4200/coursepageinfo
    loadChildren: () => import('./prospectus/coursepageinfo/coursepageinfo.module').then( m => m.CoursepageinfoPageModule)
  },  {
    path: 'institute-of-applied-science-courses',
    loadChildren: () => import('./institutes/institute-of-applied-science-courses/institute-of-applied-science-courses.module').then( m => m.InstituteOfAppliedScienceCoursesPageModule)
  },
  {
    path: 'institute-of-applied-science-course-level-list',
    loadChildren: () => import('./institutes/institute-of-applied-science-course-level-list/institute-of-applied-science-course-level-list.module').then( m => m.InstituteOfAppliedScienceCourseLevelListPageModule)
  },
  {
    path: 'institute-of-business-home-page',
    loadChildren: () => import('./institutes/institute-of-business-home-page/institute-of-business-home-page.module').then( m => m.InstituteOfBusinessHomePagePageModule)
  },
  {
    path: 'institute-of-community-service-home-page',
    loadChildren: () => import('./institutes/institute-of-community-service-home-page/institute-of-community-service-home-page.module').then( m => m.InstituteOfCommunityServiceHomePagePageModule)
  },
  {
    path: 'institute-for-the-creative-arts-home-page',
    loadChildren: () => import('./institutes/institute-for-the-creative-arts-home-page/institute-for-the-creative-arts-home-page.module').then( m => m.InstituteForTheCreativeArtsHomePagePageModule)
  },
  {
    path: 'institute-of-engineering-and-transport-home-page',
    loadChildren: () => import('./institutes/institute-of-engineering-and-transport-home-page/institute-of-engineering-and-transport-home-page.module').then( m => m.InstituteOfEngineeringAndTransportHomePagePageModule)
  },
  {
    path: 'institute-of-ict-home-page',
    loadChildren: () => import('./institutes/institute-of-ict-home-page/institute-of-ict-home-page.module').then( m => m.InstituteOfICTHomePagePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
