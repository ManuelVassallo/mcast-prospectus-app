import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaAdChsPage } from './ica-ad-chs.page';

describe('IcaAdChsPage', () => {
  let component: IcaAdChsPage;
  let fixture: ComponentFixture<IcaAdChsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaAdChsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaAdChsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
