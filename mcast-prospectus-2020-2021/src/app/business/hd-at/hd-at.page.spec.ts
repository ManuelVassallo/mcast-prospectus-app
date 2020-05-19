import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HdAtPage } from './hd-at.page';

describe('HdAtPage', () => {
  let component: HdAtPage;
  let fixture: ComponentFixture<HdAtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdAtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HdAtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
