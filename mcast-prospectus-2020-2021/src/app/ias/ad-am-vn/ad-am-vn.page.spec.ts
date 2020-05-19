import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdAmVnPage } from './ad-am-vn.page';

describe('AdAmVnPage', () => {
  let component: AdAmVnPage;
  let fixture: ComponentFixture<AdAmVnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAmVnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdAmVnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
