import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdEsPage } from './ad-es.page';

describe('AdEsPage', () => {
  let component: AdEsPage;
  let fixture: ComponentFixture<AdEsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdEsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdEsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
