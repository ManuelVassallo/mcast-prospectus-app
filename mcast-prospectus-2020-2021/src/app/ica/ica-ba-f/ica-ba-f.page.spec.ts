import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaBaFPage } from './ica-ba-f.page';

describe('IcaBaFPage', () => {
  let component: IcaBaFPage;
  let fixture: ComponentFixture<IcaBaFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaBaFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaBaFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
