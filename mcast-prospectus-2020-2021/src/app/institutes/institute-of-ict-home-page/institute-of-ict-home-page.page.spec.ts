import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfICTHomePagePage } from './institute-of-ict-home-page.page';

describe('InstituteOfICTHomePagePage', () => {
  let component: InstituteOfICTHomePagePage;
  let fixture: ComponentFixture<InstituteOfICTHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfICTHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfICTHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
