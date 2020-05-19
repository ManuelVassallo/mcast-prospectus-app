import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaCtPage } from './ba-ct.page';

describe('BaCtPage', () => {
  let component: BaCtPage;
  let fixture: ComponentFixture<BaCtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaCtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaCtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
