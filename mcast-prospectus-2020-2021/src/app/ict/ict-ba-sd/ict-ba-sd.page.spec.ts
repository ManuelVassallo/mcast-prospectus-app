import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctBaSdPage } from './ict-ba-sd.page';

describe('IctBaSdPage', () => {
  let component: IctBaSdPage;
  let fixture: ComponentFixture<IctBaSdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctBaSdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctBaSdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
