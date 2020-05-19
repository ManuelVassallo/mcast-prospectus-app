import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoFcIctPage } from './gozo-fc-ict.page';

describe('GozoFcIctPage', () => {
  let component: GozoFcIctPage;
  let fixture: ComponentFixture<GozoFcIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoFcIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoFcIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
