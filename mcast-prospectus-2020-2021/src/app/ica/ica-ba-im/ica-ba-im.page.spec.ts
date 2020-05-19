import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaBaImPage } from './ica-ba-im.page';

describe('IcaBaImPage', () => {
  let component: IcaBaImPage;
  let fixture: ComponentFixture<IcaBaImPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaBaImPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaBaImPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
