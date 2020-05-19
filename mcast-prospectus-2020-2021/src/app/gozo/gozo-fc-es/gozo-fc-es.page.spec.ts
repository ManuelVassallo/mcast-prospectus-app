import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GozoFcEsPage } from './gozo-fc-es.page';

describe('GozoFcEsPage', () => {
  let component: GozoFcEsPage;
  let fixture: ComponentFixture<GozoFcEsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GozoFcEsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GozoFcEsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
