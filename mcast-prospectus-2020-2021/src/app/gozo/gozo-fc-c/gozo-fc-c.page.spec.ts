import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoFcCPage } from './gozo-fc-c.page';

describe('GozoFcCPage', () => {
  let component: GozoFcCPage;
  let fixture: ComponentFixture<GozoFcCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoFcCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoFcCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
