import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaEePage } from './ba-ee.page';

describe('BaEePage', () => {
  let component: BaEePage;
  let fixture: ComponentFixture<BaEePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaEePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaEePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
