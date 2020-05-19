import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersEePage } from './masters-ee.page';

describe('MastersEePage', () => {
  let component: MastersEePage;
  let fixture: ComponentFixture<MastersEePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersEePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersEePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
