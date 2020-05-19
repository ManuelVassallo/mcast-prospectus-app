import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdAPage } from './ad-a.page';

describe('AdAPage', () => {
  let component: AdAPage;
  let fixture: ComponentFixture<AdAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
