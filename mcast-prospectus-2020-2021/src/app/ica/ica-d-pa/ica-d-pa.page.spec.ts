import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaDPaPage } from './ica-d-pa.page';

describe('IcaDPaPage', () => {
  let component: IcaDPaPage;
  let fixture: ComponentFixture<IcaDPaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaDPaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaDPaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
