import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersAsbPage } from './masters-asb.page';

describe('MastersAsbPage', () => {
  let component: MastersAsbPage;
  let fixture: ComponentFixture<MastersAsbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersAsbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersAsbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
