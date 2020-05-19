import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaHdEyPage } from './ica-hd-ey.page';

describe('IcaHdEyPage', () => {
  let component: IcaHdEyPage;
  let fixture: ComponentFixture<IcaHdEyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaHdEyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaHdEyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
