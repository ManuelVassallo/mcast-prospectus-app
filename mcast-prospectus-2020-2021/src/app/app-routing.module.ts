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
  },
  {
    path: 'institute-of-applied-science-courses', //http://localhost:4200/institute-of-applied-science-courses
    loadChildren: () => import('./institutes/institute-of-applied-science-courses/institute-of-applied-science-courses.module').then( m => m.InstituteOfAppliedScienceCoursesPageModule)
  },
  {
    path: 'institute-of-applied-science-course-level-list', //http://localhost:4200/institute-of-applied-science-course-level-list
    loadChildren: () => import('./institutes/institute-of-applied-science-course-level-list/institute-of-applied-science-course-level-list.module').then( m => m.InstituteOfAppliedScienceCourseLevelListPageModule)
  },
  {
    path: 'institute-of-business-home-page', //http://localhost:4200/institute-of-business-home-page
    loadChildren: () => import('./institutes/institute-of-business-home-page/institute-of-business-home-page.module').then( m => m.InstituteOfBusinessHomePagePageModule)
  },
  {
    path: 'institute-of-community-service-home-page', //http://localhost:4200/institute-of-community-service-home-page
    loadChildren: () => import('./institutes/institute-of-community-service-home-page/institute-of-community-service-home-page.module').then( m => m.InstituteOfCommunityServiceHomePagePageModule)
  },
  {
    path: 'institute-for-the-creative-arts-home-page', //http://localhost:4200/institute-for-the-creative-arts-home-page
    loadChildren: () => import('./institutes/institute-for-the-creative-arts-home-page/institute-for-the-creative-arts-home-page.module').then( m => m.InstituteForTheCreativeArtsHomePagePageModule)
  },
  {
    path: 'institute-of-engineering-and-transport-home-page', //http://localhost:4200/institute-of-engineering-and-transport-home-page
    loadChildren: () => import('./institutes/institute-of-engineering-and-transport-home-page/institute-of-engineering-and-transport-home-page.module').then( m => m.InstituteOfEngineeringAndTransportHomePagePageModule)
  },
  {
    path: 'institute-of-ict-home-page', //http://localhost:4200/institute-of-ict-home-page
    loadChildren: () => import('./institutes/institute-of-ict-home-page/institute-of-ict-home-page.module').then( m => m.InstituteOfICTHomePagePageModule)
  },  {
    path: 'course-levels-ica',
    loadChildren: () => import('./institutes/course-levels-ica/course-levels-ica.module').then( m => m.CourseLevelsICAPageModule)
  },
  {
    path: 'course-levels-business',
    loadChildren: () => import('./institutes/course-levels-business/course-levels-business.module').then( m => m.CourseLevelsBusinessPageModule)
  },
  {
    path: 'course-levels-ics',
    loadChildren: () => import('./institutes/course-levels-ics/course-levels-ics.module').then( m => m.CourseLevelsICSPageModule)
  },
  {
    path: 'course-levels-engineering',
    loadChildren: () => import('./institutes/course-levels-engineering/course-levels-engineering.module').then( m => m.CourseLevelsEngineeringPageModule)
  },
  {
    path: 'course-levels-ict',
    loadChildren: () => import('./institutes/course-levels-ict/course-levels-ict.module').then( m => m.CourseLevelsICTPageModule)
  },
  {
    path: 'foundation-ias',
    loadChildren: () => import('./level/foundation-ias/foundation-ias.module').then( m => m.FoundationIasPageModule)
  },
  {
    path: 'introductory-ias',
    loadChildren: () => import('./level/introductory-ias/introductory-ias.module').then( m => m.IntroductoryIasPageModule)
  },
  {
    path: 'diploma-ias',
    loadChildren: () => import('./level/diploma-ias/diploma-ias.module').then( m => m.DiplomaIasPageModule)
  },
  {
    path: 'advanced-diploma-ias',
    loadChildren: () => import('./level/advanced-diploma-ias/advanced-diploma-ias.module').then( m => m.AdvancedDiplomaIasPageModule)
  },
  {
    path: 'bachelor-ias',
    loadChildren: () => import('./level/bachelor-ias/bachelor-ias.module').then( m => m.BachelorIasPageModule)
  },
  {
    path: 'introductory-ica',
    loadChildren: () => import('./level/introductory-ica/introductory-ica.module').then( m => m.IntroductoryIcaPageModule)
  },
  {
    path: 'foundation-ica',
    loadChildren: () => import('./level/foundation-ica/foundation-ica.module').then( m => m.FoundationIcaPageModule)
  },
  {
    path: 'diploma-ica',
    loadChildren: () => import('./level/diploma-ica/diploma-ica.module').then( m => m.DiplomaIcaPageModule)
  },
  {
    path: 'advanced-diploma-ica',
    loadChildren: () => import('./level/advanced-diploma-ica/advanced-diploma-ica.module').then( m => m.AdvancedDiplomaIcaPageModule)
  },
  {
    path: 'bachelor-ica',
    loadChildren: () => import('./level/bachelor-ica/bachelor-ica.module').then( m => m.BachelorIcaPageModule)
  },
  {
    path: 'introductory-business',
    loadChildren: () => import('./level/introductory-business/introductory-business.module').then( m => m.IntroductoryBusinessPageModule)
  },
  {
    path: 'foundation-business',
    loadChildren: () => import('./level/foundation-business/foundation-business.module').then( m => m.FoundationBusinessPageModule)
  },
  {
    path: 'diploma-business',
    loadChildren: () => import('./level/diploma-business/diploma-business.module').then( m => m.DiplomaBusinessPageModule)
  },
  {
    path: 'advanced-diploma-business',
    loadChildren: () => import('./level/advanced-diploma-business/advanced-diploma-business.module').then( m => m.AdvancedDiplomaBusinessPageModule)
  },
  {
    path: 'bachelor-business',
    loadChildren: () => import('./level/bachelor-business/bachelor-business.module').then( m => m.BachelorBusinessPageModule)
  },
  {
    path: 'introductory-ics',
    loadChildren: () => import('./level/introductory-ics/introductory-ics.module').then( m => m.IntroductoryIcsPageModule)
  },
  {
    path: 'foundation-ics',
    loadChildren: () => import('./level/foundation-ics/foundation-ics.module').then( m => m.FoundationIcsPageModule)
  },
  {
    path: 'diploma-ics',
    loadChildren: () => import('./level/diploma-ics/diploma-ics.module').then( m => m.DiplomaIcsPageModule)
  },
  {
    path: 'advanced-diploma-ics',
    loadChildren: () => import('./level/advanced-diploma-ics/advanced-diploma-ics.module').then( m => m.AdvancedDiplomaIcsPageModule)
  },
  {
    path: 'bachelor-ics',
    loadChildren: () => import('./level/bachelor-ics/bachelor-ics.module').then( m => m.BachelorIcsPageModule)
  },
  {
    path: 'introductory-engineering',
    loadChildren: () => import('./level/introductory-engineering/introductory-engineering.module').then( m => m.IntroductoryEngineeringPageModule)
  },
  {
    path: 'foundation-engineering',
    loadChildren: () => import('./level/foundation-engineering/foundation-engineering.module').then( m => m.FoundationEngineeringPageModule)
  },
  {
    path: 'diploma-engineering',
    loadChildren: () => import('./level/diploma-engineering/diploma-engineering.module').then( m => m.DiplomaEngineeringPageModule)
  },
  {
    path: 'advanced-diploma-engineering',
    loadChildren: () => import('./level/advanced-diploma-engineering/advanced-diploma-engineering.module').then( m => m.AdvancedDiplomaEngineeringPageModule)
  },
  {
    path: 'bachelor-engineering',
    loadChildren: () => import('./level/bachelor-engineering/bachelor-engineering.module').then( m => m.BachelorEngineeringPageModule)
  },
  {
    path: 'introductory-ict',
    loadChildren: () => import('./level/introductory-ict/introductory-ict.module').then( m => m.IntroductoryIctPageModule)
  },
  {
    path: 'foundation-ict',
    loadChildren: () => import('./level/foundation-ict/foundation-ict.module').then( m => m.FoundationIctPageModule)
  },
  {
    path: 'diploma-ict',
    loadChildren: () => import('./level/diploma-ict/diploma-ict.module').then( m => m.DiplomaIctPageModule)
  },
  {
    path: 'advanced-diploma-ict',
    loadChildren: () => import('./level/advanced-diploma-ict/advanced-diploma-ict.module').then( m => m.AdvancedDiplomaIctPageModule)
  },
  {
    path: 'bachelor-ict',
    loadChildren: () => import('./level/bachelor-ict/bachelor-ict.module').then( m => m.BachelorIctPageModule)
  },
  {
    path: 'institute-info-business',
    loadChildren: () => import('./info/institute-info-business/institute-info-business.module').then( m => m.InstituteInfoBusinessPageModule)
  },
  {
    path: 'institute-info-engineering',
    loadChildren: () => import('./info/institute-info-engineering/institute-info-engineering.module').then( m => m.InstituteInfoEngineeringPageModule)
  },
  {
    path: 'institute-info-ica',
    loadChildren: () => import('./info/institute-info-ica/institute-info-ica.module').then( m => m.InstituteInfoIcaPageModule)
  },
  {
    path: 'institute-info-ics',
    loadChildren: () => import('./info/institute-info-ics/institute-info-ics.module').then( m => m.InstituteInfoIcsPageModule)
  },
  {
    path: 'institute-info-ict',
    loadChildren: () => import('./info/institute-info-ict/institute-info-ict.module').then( m => m.InstituteInfoIctPageModule)
  },
  {
    path: 'gozo-campus-home-page',
    loadChildren: () => import('./institutes/gozo-campus-home-page/gozo-campus-home-page.module').then( m => m.GozoCampusHomePagePageModule)
  },
  {
    path: 'masters-home-page',
    loadChildren: () => import('./institutes/masters-home-page/masters-home-page.module').then( m => m.MastersHomePagePageModule)
  },
  {
    path: 'course-levels-gozo',
    loadChildren: () => import('./institutes/course-levels-gozo/course-levels-gozo.module').then( m => m.CourseLevelsGozoPageModule)
  },
  {
    path: 'institute-info-gozo',
    loadChildren: () => import('./info/institute-info-gozo/institute-info-gozo.module').then( m => m.InstituteInfoGozoPageModule)
  },
  {
    path: 'courses-list-masters',
    loadChildren: () => import('./institutes/courses-list-masters/courses-list-masters.module').then( m => m.CoursesListMastersPageModule)
  },
  {
    path: 'introductory-gozo',
    loadChildren: () => import('./level/introductory-gozo/introductory-gozo.module').then( m => m.IntroductoryGozoPageModule)
  },
  {
    path: 'foundation-gozo',
    loadChildren: () => import('./level/foundation-gozo/foundation-gozo.module').then( m => m.FoundationGozoPageModule)
  },
  {
    path: 'diploma-gozo',
    loadChildren: () => import('./level/diploma-gozo/diploma-gozo.module').then( m => m.DiplomaGozoPageModule)
  },
  {
    path: 'advanced-diploma-gozo',
    loadChildren: () => import('./level/advanced-diploma-gozo/advanced-diploma-gozo.module').then( m => m.AdvancedDiplomaGozoPageModule)
  },
  {
    path: 'bachelor-gozo',
    loadChildren: () => import('./level/bachelor-gozo/bachelor-gozo.module').then( m => m.BachelorGozoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
