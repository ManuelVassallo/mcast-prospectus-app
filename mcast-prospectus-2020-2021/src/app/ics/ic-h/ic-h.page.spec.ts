import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcHPage } from './ic-h.page';

describe('IcHPage', () => {
  let component: IcHPage;
  let fixture: ComponentFixture<IcHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
