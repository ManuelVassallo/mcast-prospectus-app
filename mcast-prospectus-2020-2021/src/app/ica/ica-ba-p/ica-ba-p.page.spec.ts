import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaBaPPage } from './ica-ba-p.page';

describe('IcaBaPPage', () => {
  let component: IcaBaPPage;
  let fixture: ComponentFixture<IcaBaPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaBaPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaBaPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
