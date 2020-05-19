import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersPdPage } from './masters-pd.page';

describe('MastersPdPage', () => {
  let component: MastersPdPage;
  let fixture: ComponentFixture<MastersPdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersPdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersPdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
