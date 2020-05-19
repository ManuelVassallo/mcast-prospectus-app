import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcCPage } from './fc-c.page';

describe('FcCPage', () => {
  let component: FcCPage;
  let fixture: ComponentFixture<FcCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
