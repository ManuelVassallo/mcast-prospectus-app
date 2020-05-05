import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorGozoPage } from './bachelor-gozo.page';

describe('BachelorGozoPage', () => {
  let component: BachelorGozoPage;
  let fixture: ComponentFixture<BachelorGozoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorGozoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorGozoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
