import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctIcIctPage } from './ict-ic-ict.page';

describe('IctIcIctPage', () => {
  let component: IctIcIctPage;
  let fixture: ComponentFixture<IctIcIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctIcIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctIcIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
