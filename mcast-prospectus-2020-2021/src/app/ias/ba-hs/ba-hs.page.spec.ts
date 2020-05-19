import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaHsPage } from './ba-hs.page';

describe('BaHsPage', () => {
  let component: BaHsPage;
  let fixture: ComponentFixture<BaHsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaHsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaHsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
