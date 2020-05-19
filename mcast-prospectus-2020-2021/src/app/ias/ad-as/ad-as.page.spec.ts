import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdAsPage } from './ad-as.page';

describe('AdAsPage', () => {
  let component: AdAsPage;
  let fixture: ComponentFixture<AdAsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdAsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
