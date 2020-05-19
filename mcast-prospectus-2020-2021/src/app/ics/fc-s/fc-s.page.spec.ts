import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcSPage } from './fc-s.page';

describe('FcSPage', () => {
  let component: FcSPage;
  let fixture: ComponentFixture<FcSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
