import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcBPage } from './fc-b.page';

describe('FcBPage', () => {
  let component: FcBPage;
  let fixture: ComponentFixture<FcBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
