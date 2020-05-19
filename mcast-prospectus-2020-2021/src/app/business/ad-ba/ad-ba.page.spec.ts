import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdBaPage } from './ad-ba.page';

describe('AdBaPage', () => {
  let component: AdBaPage;
  let fixture: ComponentFixture<AdBaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdBaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
