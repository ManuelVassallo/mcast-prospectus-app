import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersItsPage } from './masters-its.page';

describe('MastersItsPage', () => {
  let component: MastersItsPage;
  let fixture: ComponentFixture<MastersItsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersItsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersItsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
