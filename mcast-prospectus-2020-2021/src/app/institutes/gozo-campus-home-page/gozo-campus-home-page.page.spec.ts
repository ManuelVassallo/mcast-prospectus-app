import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoCampusHomePagePage } from './gozo-campus-home-page.page';

describe('GozoCampusHomePagePage', () => {
  let component: GozoCampusHomePagePage;
  let fixture: ComponentFixture<GozoCampusHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoCampusHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoCampusHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
