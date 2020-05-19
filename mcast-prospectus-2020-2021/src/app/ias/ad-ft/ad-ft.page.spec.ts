import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdFtPage } from './ad-ft.page';

describe('AdFtPage', () => {
  let component: AdFtPage;
  let fixture: ComponentFixture<AdFtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdFtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
