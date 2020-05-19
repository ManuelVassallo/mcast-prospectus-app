import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersRPage } from './masters-r.page';

describe('MastersRPage', () => {
  let component: MastersRPage;
  let fixture: ComponentFixture<MastersRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
