import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteForTheCreativeArtsHomePagePage } from './institute-for-the-creative-arts-home-page.page';

describe('InstituteForTheCreativeArtsHomePagePage', () => {
  let component: InstituteForTheCreativeArtsHomePagePage;
  let fixture: ComponentFixture<InstituteForTheCreativeArtsHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteForTheCreativeArtsHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteForTheCreativeArtsHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
