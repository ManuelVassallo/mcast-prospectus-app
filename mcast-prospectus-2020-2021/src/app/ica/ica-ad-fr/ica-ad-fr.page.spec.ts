import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaAdFrPage } from './ica-ad-fr.page';

describe('IcaAdFrPage', () => {
  let component: IcaAdFrPage;
  let fixture: ComponentFixture<IcaAdFrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaAdFrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaAdFrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
