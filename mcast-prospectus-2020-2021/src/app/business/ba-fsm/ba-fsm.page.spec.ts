import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaFsmPage } from './ba-fsm.page';

describe('BaFsmPage', () => {
  let component: BaFsmPage;
  let fixture: ComponentFixture<BaFsmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaFsmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaFsmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
