import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoIcCePage } from './gozo-ic-ce.page';

describe('GozoIcCePage', () => {
  let component: GozoIcCePage;
  let fixture: ComponentFixture<GozoIcCePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoIcCePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoIcCePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
