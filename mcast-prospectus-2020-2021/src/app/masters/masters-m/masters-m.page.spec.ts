import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersMPage } from './masters-m.page';

describe('MastersMPage', () => {
  let component: MastersMPage;
  let fixture: ComponentFixture<MastersMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
