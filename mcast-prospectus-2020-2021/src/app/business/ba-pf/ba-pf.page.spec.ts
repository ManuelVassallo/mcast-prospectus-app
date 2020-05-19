import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaPfPage } from './ba-pf.page';

describe('BaPfPage', () => {
  let component: BaPfPage;
  let fixture: ComponentFixture<BaPfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaPfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaPfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
