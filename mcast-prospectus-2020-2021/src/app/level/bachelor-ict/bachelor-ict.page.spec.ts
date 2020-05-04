import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorIctPage } from './bachelor-ict.page';

describe('BachelorIctPage', () => {
  let component: BachelorIctPage;
  let fixture: ComponentFixture<BachelorIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
