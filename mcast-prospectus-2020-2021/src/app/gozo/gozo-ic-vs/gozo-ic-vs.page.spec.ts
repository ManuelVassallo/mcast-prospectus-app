import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoIcVsPage } from './gozo-ic-vs.page';

describe('GozoIcVsPage', () => {
  let component: GozoIcVsPage;
  let fixture: ComponentFixture<GozoIcVsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoIcVsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoIcVsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
