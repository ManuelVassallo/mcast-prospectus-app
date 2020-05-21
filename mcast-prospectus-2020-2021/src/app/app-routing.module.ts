import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
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
    path: 'instituteofappliedscience', //http://localhost:4200/instituteofappliedscience
    loadChildren: () => import('./prospectus/instituteofappliedscience/instituteofappliedscience.module').then( m => m.InstituteofappliedsciencePageModule)
  },
  {
    path: 'coursepageinfo/:code', //http://localhost:4200/coursepageinfo
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
  },
  {
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
  },
  {
    path: 'ic-applied-science',
    loadChildren: () => import('./ias/ic-applied-science/ic-applied-science.module').then( m => m.IcAppliedSciencePageModule)
  },
  {
    path: 'ic-animal-husbandry-and-horticultural-skills',
    loadChildren: () => import('./ias/ic-animal-husbandry-and-horticultural-skills/ic-animal-husbandry-and-horticultural-skills.module').then( m => m.IcAnimalHusbandryAndHorticulturalSkillsPageModule)
  },
  {
    path: 'fc-applied-science',
    loadChildren: () => import('./ias/fc-applied-science/fc-applied-science.module').then( m => m.FcAppliedSciencePageModule)
  },
  {
    path: 'fc-horticulture-and-animal-care',
    loadChildren: () => import('./ias/fc-horticulture-and-animal-care/fc-horticulture-and-animal-care.module').then( m => m.FcHorticultureAndAnimalCarePageModule)
  },
  {
    path: 'd-applied-science',
    loadChildren: () => import('./ias/d-applied-science/d-applied-science.module').then( m => m.DAppliedSciencePageModule)
  },
  {
    path: 'd-animal-care',
    loadChildren: () => import('./ias/d-animal-care/d-animal-care.module').then( m => m.DAnimalCarePageModule)
  },
  {
    path: 'd-fish-husbandry',
    loadChildren: () => import('./ias/d-fish-husbandry/d-fish-husbandry.module').then( m => m.DFishHusbandryPageModule)
  },
  {
    path: 'd-horticulture',
    loadChildren: () => import('./ias/d-horticulture/d-horticulture.module').then( m => m.DHorticulturePageModule)
  },
  {
    path: 'ad-pt',
    loadChildren: () => import('./ias/ad-pt/ad-pt.module').then( m => m.AdPtPageModule)
  },
  {
    path: 'ad-as',
    loadChildren: () => import('./ias/ad-as/ad-as.module').then( m => m.AdAsPageModule)
  },
  {
    path: 'ad-es',
    loadChildren: () => import('./ias/ad-es/ad-es.module').then( m => m.AdEsPageModule)
  },
  {
    path: 'ad-hs',
    loadChildren: () => import('./ias/ad-hs/ad-hs.module').then( m => m.AdHsPageModule)
  },
  {
    path: 'ad-ft',
    loadChildren: () => import('./ias/ad-ft/ad-ft.module').then( m => m.AdFtPageModule)
  },
  {
    path: 'ad-am-vn',
    loadChildren: () => import('./ias/ad-am-vn/ad-am-vn.module').then( m => m.AdAmVnPageModule)
  },
  {
    path: 'ad-fm',
    loadChildren: () => import('./ias/ad-fm/ad-fm.module').then( m => m.AdFmPageModule)
  },
  {
    path: 'ad-h',
    loadChildren: () => import('./ias/ad-h/ad-h.module').then( m => m.AdHPageModule)
  },
  {
    path: 'ba-ct',
    loadChildren: () => import('./ias/ba-ct/ba-ct.module').then( m => m.BaCtPageModule)
  },
  {
    path: 'ba-ee',
    loadChildren: () => import('./ias/ba-ee/ba-ee.module').then( m => m.BaEePageModule)
  },
  {
    path: 'ba-hs',
    loadChildren: () => import('./ias/ba-hs/ba-hs.module').then( m => m.BaHsPageModule)
  },
  {
    path: 'ba-eh',
    loadChildren: () => import('./ias/ba-eh/ba-eh.module').then( m => m.BaEhPageModule)
  },
  {
    path: 'ba-am-vn',
    loadChildren: () => import('./ias/ba-am-vn/ba-am-vn.module').then( m => m.BaAmVnPageModule)
  },
  {
    path: 'ba-h',
    loadChildren: () => import('./ias/ba-h/ba-h.module').then( m => m.BaHPageModule)
  },
  {
    path: 'ba-fm',
    loadChildren: () => import('./ias/ba-fm/ba-fm.module').then( m => m.BaFmPageModule)
  },
  {
    path: 'ic-b',
    loadChildren: () => import('./business/ic-b/ic-b.module').then( m => m.IcBPageModule)
  },
  {
    path: 'fc-b',
    loadChildren: () => import('./business/fc-b/fc-b.module').then( m => m.FcBPageModule)
  },
  {
    path: 'd-b',
    loadChildren: () => import('./business/d-b/d-b.module').then( m => m.DBPageModule)
  },
  {
    path: 'ad-ba',
    loadChildren: () => import('./business/ad-ba/ad-ba.module').then( m => m.AdBaPageModule)
  },
  {
    path: 'ad-fi',
    loadChildren: () => import('./business/ad-fi/ad-fi.module').then( m => m.AdFiPageModule)
  },
  {
    path: 'ad-a',
    loadChildren: () => import('./business/ad-a/ad-a.module').then( m => m.AdAPageModule)
  },
  {
    path: 'ad-m',
    loadChildren: () => import('./business/ad-m/ad-m.module').then( m => m.AdMPageModule)
  },
  {
    path: 'ad-ass',
    loadChildren: () => import('./business/ad-ass/ad-ass.module').then( m => m.AdAssPageModule)
  },
  {
    path: 'ad-r',
    loadChildren: () => import('./business/ad-r/ad-r.module').then( m => m.AdRPageModule)
  },
  {
    path: 'hd-at',
    loadChildren: () => import('./business/hd-at/hd-at.module').then( m => m.HdAtPageModule)
  },
  {
    path: 'ba-be',
    loadChildren: () => import('./business/ba-be/ba-be.module').then( m => m.BaBePageModule)
  },
  {
    path: 'ba-pf',
    loadChildren: () => import('./business/ba-pf/ba-pf.module').then( m => m.BaPfPageModule)
  },
  {
    path: 'ba-fsm',
    loadChildren: () => import('./business/ba-fsm/ba-fsm.module').then( m => m.BaFsmPageModule)
  },
  {
    path: 'fc-c',
    loadChildren: () => import('./ics/fc-c/fc-c.module').then( m => m.FcCPageModule)
  },
  {
    path: 'fc-wb-b-h',
    loadChildren: () => import('./ics/fc-wb-b-h/fc-wb-b-h.module').then( m => m.FcWbBHPageModule)
  },
  {
    path: 'fc-s',
    loadChildren: () => import('./ics/fc-s/fc-s.module').then( m => m.FcSPageModule)
  },
  {
    path: 'ic-c',
    loadChildren: () => import('./ics/ic-c/ic-c.module').then( m => m.IcCPageModule)
  },
  {
    path: 'ic-h',
    loadChildren: () => import('./ics/ic-h/ic-h.module').then( m => m.IcHPageModule)
  },
  {
    path: 'ics-d-bs',
    loadChildren: () => import('./ics/ics-d-bs/ics-d-bs.module').then( m => m.IcsDBsPageModule)
  },
  {
    path: 'ics-d-hw',
    loadChildren: () => import('./ics/ics-d-hw/ics-d-hw.module').then( m => m.IcsDHwPageModule)
  },
  {
    path: 'ics-d-h-sc',
    loadChildren: () => import('./ics/ics-d-h-sc/ics-d-h-sc.module').then( m => m.IcsDHScPageModule)
  },
  {
    path: 'ics-d-s',
    loadChildren: () => import('./ics/ics-d-s/ics-d-s.module').then( m => m.IcsDSPageModule)
  },
  {
    path: 'ics-ed-s-e-p',
    loadChildren: () => import('./ics/ics-ed-s-e-p/ics-ed-s-e-p.module').then( m => m.IcsEdSEPPageModule)
  },
  {
    path: 'ics-ad-b-ct',
    loadChildren: () => import('./ics/ics-ad-b-ct/ics-ad-b-ct.module').then( m => m.IcsAdBCtPageModule)
  },
  {
    path: 'ics-ad-cc-l-d',
    loadChildren: () => import('./ics/ics-ad-cc-l-d/ics-ad-cc-l-d.module').then( m => m.IcsAdCcLDPageModule)
  },
  {
    path: 'ics-ad-h-sc',
    loadChildren: () => import('./ics/ics-ad-h-sc/ics-ad-h-sc.module').then( m => m.IcsAdHScPageModule)
  },
  {
    path: 'ics-ad-s',
    loadChildren: () => import('./ics/ics-ad-s/ics-ad-s.module').then( m => m.IcsAdSPageModule)
  },
  {
    path: 'ica-hd-ey',
    loadChildren: () => import('./ics/ica-hd-ey/ica-hd-ey.module').then( m => m.IcaHdEyPageModule)
  },
  {
    path: 'ics-ba-h-sc',
    loadChildren: () => import('./ics/ics-ba-h-sc/ics-ba-h-sc.module').then( m => m.IcsBaHScPageModule)
  },
  {
    path: 'ics-ba-ie',
    loadChildren: () => import('./ics/ics-ba-ie/ics-ba-ie.module').then( m => m.IcsBaIePageModule)
  },
  {
    path: 'ics-ba-h-s',
    loadChildren: () => import('./ics/ics-ba-h-s/ics-ba-h-s.module').then( m => m.IcsBaHSPageModule)
  },
  {
    path: 'ics-ba-s',
    loadChildren: () => import('./ics/ics-ba-s/ics-ba-s.module').then( m => m.IcsBaSPageModule)
  },
  {
    path: 'ica-ic-ad',
    loadChildren: () => import('./ica/ica-ic-ad/ica-ic-ad.module').then( m => m.IcaIcAdPageModule)
  },
  {
    path: 'ica-fc-ca',
    loadChildren: () => import('./ica/ica-fc-ca/ica-fc-ca.module').then( m => m.IcaFcCaPageModule)
  },
  {
    path: 'ica-d-ad',
    loadChildren: () => import('./ica/ica-d-ad/ica-d-ad.module').then( m => m.IcaDAdPageModule)
  },
  {
    path: 'ica-d-pa',
    loadChildren: () => import('./ica/ica-d-pa/ica-d-pa.module').then( m => m.IcaDPaPageModule)
  },
  {
    path: 'ica-d-m',
    loadChildren: () => import('./ica/ica-d-m/ica-d-m.module').then( m => m.IcaDMPageModule)
  },
  {
    path: 'ica-d-p',
    loadChildren: () => import('./ica/ica-d-p/ica-d-p.module').then( m => m.IcaDPPageModule)
  },
  {
    path: 'ica-ad-ad',
    loadChildren: () => import('./ica/ica-ad-ad/ica-ad-ad.module').then( m => m.IcaAdAdPageModule)
  },
  {
    path: 'ica-ad-cmp',
    loadChildren: () => import('./ica/ica-ad-cmp/ica-ad-cmp.module').then( m => m.IcaAdCmpPageModule)
  },
  {
    path: 'ica-ad-chs',
    loadChildren: () => import('./ica/ica-ad-chs/ica-ad-chs.module').then( m => m.IcaAdChsPageModule)
  },
  {
    path: 'ica-ad-fr',
    loadChildren: () => import('./ica/ica-ad-fr/ica-ad-fr.module').then( m => m.IcaAdFrPageModule)
  },
  {
    path: 'ica-ad-gd-im',
    loadChildren: () => import('./ica/ica-ad-gd-im/ica-ad-gd-im.module').then( m => m.IcaAdGdImPageModule)
  },
  {
    path: 'ica-ad-pa',
    loadChildren: () => import('./ica/ica-ad-pa/ica-ad-pa.module').then( m => m.IcaAdPaPageModule)
  },
  {
    path: 'ica-ad-p',
    loadChildren: () => import('./ica/ica-ad-p/ica-ad-p.module').then( m => m.IcaAdPPageModule)
  },
  {
    path: 'ica-ba-fa',
    loadChildren: () => import('./ica/ica-ba-fa/ica-ba-fa.module').then( m => m.IcaBaFaPageModule)
  },
  {
    path: 'ica-ba-ga-vd',
    loadChildren: () => import('./ica/ica-ba-ga-vd/ica-ba-ga-vd.module').then( m => m.IcaBaGaVdPageModule)
  },
  {
    path: 'ica-ba-gd',
    loadChildren: () => import('./ica/ica-ba-gd/ica-ba-gd.module').then( m => m.IcaBaGdPageModule)
  },
  {
    path: 'ica-ba-im',
    loadChildren: () => import('./ica/ica-ba-im/ica-ba-im.module').then( m => m.IcaBaImPageModule)
  },
  {
    path: 'ica-ba-pd',
    loadChildren: () => import('./ica/ica-ba-pd/ica-ba-pd.module').then( m => m.IcaBaPdPageModule)
  },
  {
    path: 'ica-ba-sd',
    loadChildren: () => import('./ica/ica-ba-sd/ica-ba-sd.module').then( m => m.IcaBaSdPageModule)
  },
  {
    path: 'ica-ba-cmp',
    loadChildren: () => import('./ica/ica-ba-cmp/ica-ba-cmp.module').then( m => m.IcaBaCmpPageModule)
  },
  {
    path: 'ica-ba-p',
    loadChildren: () => import('./ica/ica-ba-p/ica-ba-p.module').then( m => m.IcaBaPPageModule)
  },
  {
    path: 'ica-ba-j',
    loadChildren: () => import('./ica/ica-ba-j/ica-ba-j.module').then( m => m.IcaBaJPageModule)
  },
  {
    path: 'ica-ba-pa',
    loadChildren: () => import('./ica/ica-ba-pa/ica-ba-pa.module').then( m => m.IcaBaPaPageModule)
  },
  {
    path: 'ica-ba-f',
    loadChildren: () => import('./ica/ica-ba-f/ica-ba-f.module').then( m => m.IcaBaFPageModule)
  },
  {
    path: 'engineering-ic-ce',
    loadChildren: () => import('./engineering/engineering-ic-ce/engineering-ic-ce.module').then( m => m.EngineeringIcCePageModule)
  },
  {
    path: 'engineering-ic-e',
    loadChildren: () => import('./engineering/engineering-ic-e/engineering-ic-e.module').then( m => m.EngineeringIcEPageModule)
  },
  {
    path: 'engineering-fc-ce',
    loadChildren: () => import('./engineering/engineering-fc-ce/engineering-fc-ce.module').then( m => m.EngineeringFcCePageModule)
  },
  {
    path: 'engineering-fc-e',
    loadChildren: () => import('./engineering/engineering-fc-e/engineering-fc-e.module').then( m => m.EngineeringFcEPageModule)
  },
  {
    path: 'engineering-d-am',
    loadChildren: () => import('./engineering/engineering-d-am/engineering-d-am.module').then( m => m.EngineeringDAmPageModule)
  },
  {
    path: 'engineering-d-asr',
    loadChildren: () => import('./engineering/engineering-d-asr/engineering-d-asr.module').then( m => m.EngineeringDAsrPageModule)
  },
  {
    path: 'engineering-d-bsi',
    loadChildren: () => import('./engineering/engineering-d-bsi/engineering-d-bsi.module').then( m => m.EngineeringDBsiPageModule)
  },
  {
    path: 'engineering-d-csm',
    loadChildren: () => import('./engineering/engineering-d-csm/engineering-d-csm.module').then( m => m.EngineeringDCsmPageModule)
  },
  {
    path: 'engineering-d-ce',
    loadChildren: () => import('./engineering/engineering-d-ce/engineering-d-ce.module').then( m => m.EngineeringDCePageModule)
  },
  {
    path: 'engineering-d-hva',
    loadChildren: () => import('./engineering/engineering-d-hva/engineering-d-hva.module').then( m => m.EngineeringDHvaPageModule)
  },
  {
    path: 'engineering-d-jf',
    loadChildren: () => import('./engineering/engineering-d-jf/engineering-d-jf.module').then( m => m.EngineeringDJfPageModule)
  },
  {
    path: 'engineering-d-mhs',
    loadChildren: () => import('./engineering/engineering-d-mhs/engineering-d-mhs.module').then( m => m.EngineeringDMhsPageModule)
  },
  {
    path: 'engineering-d-tt',
    loadChildren: () => import('./engineering/engineering-d-tt/engineering-d-tt.module').then( m => m.EngineeringDTtPageModule)
  },
  {
    path: 'engineering-d-wf',
    loadChildren: () => import('./engineering/engineering-d-wf/engineering-d-wf.module').then( m => m.EngineeringDWfPageModule)
  },
  {
    path: 'engineering-d-ei',
    loadChildren: () => import('./engineering/engineering-d-ei/engineering-d-ei.module').then( m => m.EngineeringDEiPageModule)
  },
  {
    path: 'engineering-d-e',
    loadChildren: () => import('./engineering/engineering-d-e/engineering-d-e.module').then( m => m.EngineeringDEPageModule)
  },
  {
    path: 'engineering-d-ar',
    loadChildren: () => import('./engineering/engineering-d-ar/engineering-d-ar.module').then( m => m.EngineeringDArPageModule)
  },
  {
    path: 'engineering-d-l',
    loadChildren: () => import('./engineering/engineering-d-l/engineering-d-l.module').then( m => m.EngineeringDLPageModule)
  },
  {
    path: 'engineering-d-me',
    loadChildren: () => import('./engineering/engineering-d-me/engineering-d-me.module').then( m => m.EngineeringDMePageModule)
  },
  {
    path: 'engineering-d-do',
    loadChildren: () => import('./engineering/engineering-d-do/engineering-d-do.module').then( m => m.EngineeringDDoPageModule)
  },
  {
    path: 'engineering-ad-ao',
    loadChildren: () => import('./engineering/engineering-ad-ao/engineering-ad-ao.module').then( m => m.EngineeringAdAoPageModule)
  },
  {
    path: 'engineering-ad-bse',
    loadChildren: () => import('./engineering/engineering-ad-bse/engineering-ad-bse.module').then( m => m.EngineeringAdBsePageModule)
  },
  {
    path: 'engineering-ad-ce',
    loadChildren: () => import('./engineering/engineering-ad-ce/engineering-ad-ce.module').then( m => m.EngineeringAdCePageModule)
  },
  {
    path: 'engineering-ad-hva',
    loadChildren: () => import('./engineering/engineering-ad-hva/engineering-ad-hva.module').then( m => m.EngineeringAdHvaPageModule)
  },
  {
    path: 'engineering-ad-jfdm',
    loadChildren: () => import('./engineering/engineering-ad-jfdm/engineering-ad-jfdm.module').then( m => m.EngineeringAdJfdmPageModule)
  },
  {
    path: 'engineering-ad-mhs',
    loadChildren: () => import('./engineering/engineering-ad-mhs/engineering-ad-mhs.module').then( m => m.EngineeringAdMhsPageModule)
  },
  {
    path: 'engineering-ad-plpgs',
    loadChildren: () => import('./engineering/engineering-ad-plpgs/engineering-ad-plpgs.module').then( m => m.EngineeringAdPlpgsPageModule)
  },
  {
    path: 'engineering-ad-wf',
    loadChildren: () => import('./engineering/engineering-ad-wf/engineering-ad-wf.module').then( m => m.EngineeringAdWfPageModule)
  },
  {
    path: 'engineering-ad-ie',
    loadChildren: () => import('./engineering/engineering-ad-ie/engineering-ad-ie.module').then( m => m.EngineeringAdIePageModule)
  },
  {
    path: 'engineering-ad-ppt',
    loadChildren: () => import('./engineering/engineering-ad-ppt/engineering-ad-ppt.module').then( m => m.EngineeringAdPptPageModule)
  },
  {
    path: 'engineering-ad-lvm',
    loadChildren: () => import('./engineering/engineering-ad-lvm/engineering-ad-lvm.module').then( m => m.EngineeringAdLvmPageModule)
  },
  {
    path: 'engineering-ad-m',
    loadChildren: () => import('./engineering/engineering-ad-m/engineering-ad-m.module').then( m => m.EngineeringAdMPageModule)
  },
  {
    path: 'engineering-ad-me',
    loadChildren: () => import('./engineering/engineering-ad-me/engineering-ad-me.module').then( m => m.EngineeringAdMePageModule)
  },
  {
    path: 'engineering-ad-om',
    loadChildren: () => import('./engineering/engineering-ad-om/engineering-ad-om.module').then( m => m.EngineeringAdOmPageModule)
  },
  {
    path: 'engineering-ba-mhs',
    loadChildren: () => import('./engineering/engineering-ba-mhs/engineering-ba-mhs.module').then( m => m.EngineeringBaMhsPageModule)
  },
  {
    path: 'engineering-ba-bse',
    loadChildren: () => import('./engineering/engineering-ba-bse/engineering-ba-bse.module').then( m => m.EngineeringBaBsePageModule)
  },
  {
    path: 'engineering-ba-ce',
    loadChildren: () => import('./engineering/engineering-ba-ce/engineering-ba-ce.module').then( m => m.EngineeringBaCePageModule)
  },
  {
    path: 'engineering-ba-ce-ce',
    loadChildren: () => import('./engineering/engineering-ba-ce-ce/engineering-ba-ce-ce.module').then( m => m.EngineeringBaCeCePageModule)
  },
  {
    path: 'engineering-ba-qs',
    loadChildren: () => import('./engineering/engineering-ba-qs/engineering-ba-qs.module').then( m => m.EngineeringBaQsPageModule)
  },
  {
    path: 'engineering-ba-ece',
    loadChildren: () => import('./engineering/engineering-ba-ece/engineering-ba-ece.module').then( m => m.EngineeringBaEcePageModule)
  },
  {
    path: 'engineering-ba-ee',
    loadChildren: () => import('./engineering/engineering-ba-ee/engineering-ba-ee.module').then( m => m.EngineeringBaEePageModule)
  },
  {
    path: 'engineering-ba-be',
    loadChildren: () => import('./engineering/engineering-ba-be/engineering-ba-be.module').then( m => m.EngineeringBaBePageModule)
  },
  {
    path: 'engineering-ba-me-m',
    loadChildren: () => import('./engineering/engineering-ba-me-m/engineering-ba-me-m.module').then( m => m.EngineeringBaMeMPageModule)
  },
  {
    path: 'engineering-ba-me-p',
    loadChildren: () => import('./engineering/engineering-ba-me-p/engineering-ba-me-p.module').then( m => m.EngineeringBaMePPageModule)
  },
  {
    path: 'engineering-ba-me',
    loadChildren: () => import('./engineering/engineering-ba-me/engineering-ba-me.module').then( m => m.EngineeringBaMePageModule)
  },
  {
    path: 'ict-ic-ict',
    loadChildren: () => import('./ict/ict-ic-ict/ict-ic-ict.module').then( m => m.IctIcIctPageModule)
  },
  {
    path: 'ict-fc-ict',
    loadChildren: () => import('./ict/ict-fc-ict/ict-fc-ict.module').then( m => m.IctFcIctPageModule)
  },
  {
    path: 'ict-d-ict',
    loadChildren: () => import('./ict/ict-d-ict/ict-d-ict.module').then( m => m.IctDIctPageModule)
  },
  {
    path: 'ict-d-ig',
    loadChildren: () => import('./ict/ict-d-ig/ict-d-ig.module').then( m => m.IctDIgPageModule)
  },
  {
    path: 'ict-ad-it-c',
    loadChildren: () => import('./ict/ict-ad-it-c/ict-ad-it-c.module').then( m => m.IctAdItCPageModule)
  },
  {
    path: 'ict-ad-it-m',
    loadChildren: () => import('./ict/ict-ad-it-m/ict-ad-it-m.module').then( m => m.IctAdItMPageModule)
  },
  {
    path: 'ict-ad-it-s',
    loadChildren: () => import('./ict/ict-ad-it-s/ict-ad-it-s.module').then( m => m.IctAdItSPageModule)
  },
  {
    path: 'ict-ba-csn',
    loadChildren: () => import('./ict/ict-ba-csn/ict-ba-csn.module').then( m => m.IctBaCsnPageModule)
  },
  {
    path: 'ict-ba-sd',
    loadChildren: () => import('./ict/ict-ba-sd/ict-ba-sd.module').then( m => m.IctBaSdPageModule)
  },
  {
    path: 'ict-ba-msd',
    loadChildren: () => import('./ict/ict-ba-msd/ict-ba-msd.module').then( m => m.IctBaMsdPageModule)
  },
  {
    path: 'ict-ba-ba',
    loadChildren: () => import('./ict/ict-ba-ba/ict-ba-ba.module').then( m => m.IctBaBaPageModule)
  },
  {
    path: 'gozo-ic-vs',
    loadChildren: () => import('./gozo/gozo-ic-vs/gozo-ic-vs.module').then( m => m.GozoIcVsPageModule)
  },
  {
    path: 'gozo-ic-ce',
    loadChildren: () => import('./gozo/gozo-ic-ce/gozo-ic-ce.module').then( m => m.GozoIcCePageModule)
  },
  {
    path: 'gozo-fc-c',
    loadChildren: () => import('./gozo/gozo-fc-c/gozo-fc-c.module').then( m => m.GozoFcCPageModule)
  },
  {
    path: 'gozo-fc-wb',
    loadChildren: () => import('./gozo/gozo-fc-wb/gozo-fc-wb.module').then( m => m.GozoFcWbPageModule)
  },
  {
    path: 'gozo-fc-ict',
    loadChildren: () => import('./gozo/gozo-fc-ict/gozo-fc-ict.module').then( m => m.GozoFcIctPageModule)
  },
  {
    path: 'gozo-fc-es',
    loadChildren: () => import('./gozo/gozo-fc-es/gozo-fc-es.module').then( m => m.GozoFcEsPageModule)
  },
  {
    path: 'masters-pgc-rm',
    loadChildren: () => import('./masters/masters-pgc-rm/masters-pgc-rm.module').then( m => m.MastersPgcRmPageModule)
  },
  {
    path: 'masters-r',
    loadChildren: () => import('./masters/masters-r/masters-r.module').then( m => m.MastersRPageModule)
  },
  {
    path: 'masters-asb',
    loadChildren: () => import('./masters/masters-asb/masters-asb.module').then( m => m.MastersAsbPageModule)
  },
  {
    path: 'masters-le',
    loadChildren: () => import('./masters/masters-le/masters-le.module').then( m => m.MastersLePageModule)
  },
  {
    path: 'masters-its',
    loadChildren: () => import('./masters/masters-its/masters-its.module').then( m => m.MastersItsPageModule)
  },
  {
    path: 'masters-ee',
    loadChildren: () => import('./masters/masters-ee/masters-ee.module').then( m => m.MastersEePageModule)
  },
  {
    path: 'masters-hpb',
    loadChildren: () => import('./masters/masters-hpb/masters-hpb.module').then( m => m.MastersHpbPageModule)
  },
  {
    path: 'masters-iwr',
    loadChildren: () => import('./masters/masters-iwr/masters-iwr.module').then( m => m.MastersIwrPageModule)
  },
  {
    path: 'masters-pd',
    loadChildren: () => import('./masters/masters-pd/masters-pd.module').then( m => m.MastersPdPageModule)
  },
  {
    path: 'masters-m',
    loadChildren: () => import('./masters/masters-m/masters-m.module').then( m => m.MastersMPageModule)
  },
  {
    path: 'masters-ess',
    loadChildren: () => import('./masters/masters-ess/masters-ess.module').then( m => m.MastersEssPageModule)
  },
  {
    path: 'course-levels/:code', // http://localhost:4200/course-levels/ias
    loadChildren: () => import('./prospectus/course-levels/course-levels.module').then( m => m.CourseLevelsPageModule)
  },
  {
    path: 'level-info/:code', // http://localhost:4200/level-info/ias
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
