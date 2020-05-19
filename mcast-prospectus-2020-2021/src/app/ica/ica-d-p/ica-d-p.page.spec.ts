import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaDPPage } from './ica-d-p.page';

describe('IcaDPPage', () => {
  let component: IcaDPPage;
  let fixture: ComponentFixture<IcaDPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaDPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaDPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
