import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcCPage } from './ic-c.page';

describe('IcCPage', () => {
  let component: IcCPage;
  let fixture: ComponentFixture<IcCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
