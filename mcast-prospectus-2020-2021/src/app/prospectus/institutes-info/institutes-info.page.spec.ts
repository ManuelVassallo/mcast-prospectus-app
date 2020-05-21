import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstitutesInfoPage } from './institutes-info.page';

describe('InstitutesInfoPage', () => {
  let component: InstitutesInfoPage;
  let fixture: ComponentFixture<InstitutesInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutesInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutesInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
