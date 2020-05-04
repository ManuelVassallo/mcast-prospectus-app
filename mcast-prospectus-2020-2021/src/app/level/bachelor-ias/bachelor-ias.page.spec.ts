import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorIasPage } from './bachelor-ias.page';

describe('BachelorIasPage', () => {
  let component: BachelorIasPage;
  let fixture: ComponentFixture<BachelorIasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorIasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorIasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
