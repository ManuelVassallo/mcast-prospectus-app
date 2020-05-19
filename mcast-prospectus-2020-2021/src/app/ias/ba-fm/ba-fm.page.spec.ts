import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaFmPage } from './ba-fm.page';

describe('BaFmPage', () => {
  let component: BaFmPage;
  let fixture: ComponentFixture<BaFmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaFmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaFmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
