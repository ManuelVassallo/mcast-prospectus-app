import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctBaMsdPage } from './ict-ba-msd.page';

describe('IctBaMsdPage', () => {
  let component: IctBaMsdPage;
  let fixture: ComponentFixture<IctBaMsdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctBaMsdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctBaMsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
