import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoFcWbPage } from './gozo-fc-wb.page';

describe('GozoFcWbPage', () => {
  let component: GozoFcWbPage;
  let fixture: ComponentFixture<GozoFcWbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoFcWbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoFcWbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
