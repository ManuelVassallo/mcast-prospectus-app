import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsEdSEPPage } from './ics-ed-s-e-p.page';

describe('IcsEdSEPPage', () => {
  let component: IcsEdSEPPage;
  let fixture: ComponentFixture<IcsEdSEPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsEdSEPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsEdSEPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
