import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctFcIctPage } from './ict-fc-ict.page';

describe('IctFcIctPage', () => {
  let component: IctFcIctPage;
  let fixture: ComponentFixture<IctFcIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctFcIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctFcIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
