import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaBePage } from './ba-be.page';

describe('BaBePage', () => {
  let component: BaBePage;
  let fixture: ComponentFixture<BaBePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaBePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaBePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
