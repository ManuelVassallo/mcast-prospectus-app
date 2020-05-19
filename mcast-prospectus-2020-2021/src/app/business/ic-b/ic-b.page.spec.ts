import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcBPage } from './ic-b.page';

describe('IcBPage', () => {
  let component: IcBPage;
  let fixture: ComponentFixture<IcBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
