import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaDAdPage } from './ica-d-ad.page';

describe('IcaDAdPage', () => {
  let component: IcaDAdPage;
  let fixture: ComponentFixture<IcaDAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaDAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaDAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
