import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersHpbPage } from './masters-hpb.page';

describe('MastersHpbPage', () => {
  let component: MastersHpbPage;
  let fixture: ComponentFixture<MastersHpbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersHpbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersHpbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
