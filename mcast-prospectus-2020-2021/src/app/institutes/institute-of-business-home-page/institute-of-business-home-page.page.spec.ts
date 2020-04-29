import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfBusinessHomePagePage } from './institute-of-business-home-page.page';

describe('InstituteOfBusinessHomePagePage', () => {
  let component: InstituteOfBusinessHomePagePage;
  let fixture: ComponentFixture<InstituteOfBusinessHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfBusinessHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfBusinessHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
