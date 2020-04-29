import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfCommunityServiceHomePagePage } from './institute-of-community-service-home-page.page';

describe('InstituteOfCommunityServiceHomePagePage', () => {
  let component: InstituteOfCommunityServiceHomePagePage;
  let fixture: ComponentFixture<InstituteOfCommunityServiceHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfCommunityServiceHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfCommunityServiceHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
