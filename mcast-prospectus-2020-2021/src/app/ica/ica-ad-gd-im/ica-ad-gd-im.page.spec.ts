import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaAdGdImPage } from './ica-ad-gd-im.page';

describe('IcaAdGdImPage', () => {
  let component: IcaAdGdImPage;
  let fixture: ComponentFixture<IcaAdGdImPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaAdGdImPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaAdGdImPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
