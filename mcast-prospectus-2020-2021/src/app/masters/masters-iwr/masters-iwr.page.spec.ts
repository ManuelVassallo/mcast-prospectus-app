import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersIwrPage } from './masters-iwr.page';

describe('MastersIwrPage', () => {
  let component: MastersIwrPage;
  let fixture: ComponentFixture<MastersIwrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersIwrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersIwrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
