import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorIcaPage } from './bachelor-ica.page';

describe('BachelorIcaPage', () => {
  let component: BachelorIcaPage;
  let fixture: ComponentFixture<BachelorIcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorIcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorIcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
