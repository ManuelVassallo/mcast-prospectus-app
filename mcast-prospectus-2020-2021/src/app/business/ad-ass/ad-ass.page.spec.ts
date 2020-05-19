import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdAssPage } from './ad-ass.page';

describe('AdAssPage', () => {
  let component: AdAssPage;
  let fixture: ComponentFixture<AdAssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdAssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
