import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctBaBaPage } from './ict-ba-ba.page';

describe('IctBaBaPage', () => {
  let component: IctBaBaPage;
  let fixture: ComponentFixture<IctBaBaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctBaBaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctBaBaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
