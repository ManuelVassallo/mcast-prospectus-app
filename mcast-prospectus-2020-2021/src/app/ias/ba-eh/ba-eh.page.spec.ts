import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaEhPage } from './ba-eh.page';

describe('BaEhPage', () => {
  let component: BaEhPage;
  let fixture: ComponentFixture<BaEhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaEhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaEhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
