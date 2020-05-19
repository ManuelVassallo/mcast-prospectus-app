import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaDMPage } from './ica-d-m.page';

describe('IcaDMPage', () => {
  let component: IcaDMPage;
  let fixture: ComponentFixture<IcaDMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaDMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaDMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
