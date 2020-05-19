import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersPgcRmPage } from './masters-pgc-rm.page';

describe('MastersPgcRmPage', () => {
  let component: MastersPgcRmPage;
  let fixture: ComponentFixture<MastersPgcRmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersPgcRmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersPgcRmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
