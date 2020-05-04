import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteInfoIcaPage } from './institute-info-ica.page';

describe('InstituteInfoIcaPage', () => {
  let component: InstituteInfoIcaPage;
  let fixture: ComponentFixture<InstituteInfoIcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteInfoIcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteInfoIcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
