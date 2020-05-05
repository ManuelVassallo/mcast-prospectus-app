import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersHomePagePage } from './masters-home-page.page';

describe('MastersHomePagePage', () => {
  let component: MastersHomePagePage;
  let fixture: ComponentFixture<MastersHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
