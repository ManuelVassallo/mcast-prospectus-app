import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaAmVnPage } from './ba-am-vn.page';

describe('BaAmVnPage', () => {
  let component: BaAmVnPage;
  let fixture: ComponentFixture<BaAmVnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaAmVnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaAmVnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
