import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctDIctPage } from './ict-d-ict.page';

describe('IctDIctPage', () => {
  let component: IctDIctPage;
  let fixture: ComponentFixture<IctDIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctDIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctDIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
