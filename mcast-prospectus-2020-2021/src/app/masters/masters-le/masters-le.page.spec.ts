import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersLePage } from './masters-le.page';

describe('MastersLePage', () => {
  let component: MastersLePage;
  let fixture: ComponentFixture<MastersLePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersLePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersLePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
