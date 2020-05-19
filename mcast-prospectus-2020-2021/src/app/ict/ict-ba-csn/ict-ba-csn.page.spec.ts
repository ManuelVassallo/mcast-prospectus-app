import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctBaCsnPage } from './ict-ba-csn.page';

describe('IctBaCsnPage', () => {
  let component: IctBaCsnPage;
  let fixture: ComponentFixture<IctBaCsnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctBaCsnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctBaCsnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
