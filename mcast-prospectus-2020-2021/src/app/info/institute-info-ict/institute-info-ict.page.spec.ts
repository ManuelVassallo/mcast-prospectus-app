import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteInfoIctPage } from './institute-info-ict.page';

describe('InstituteInfoIctPage', () => {
  let component: InstituteInfoIctPage;
  let fixture: ComponentFixture<InstituteInfoIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteInfoIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteInfoIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
