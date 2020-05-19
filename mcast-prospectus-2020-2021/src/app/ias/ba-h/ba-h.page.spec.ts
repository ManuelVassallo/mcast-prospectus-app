import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaHPage } from './ba-h.page';

describe('BaHPage', () => {
  let component: BaHPage;
  let fixture: ComponentFixture<BaHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
