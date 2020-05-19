import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DHorticulturePage } from './d-horticulture.page';

describe('DHorticulturePage', () => {
  let component: DHorticulturePage;
  let fixture: ComponentFixture<DHorticulturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DHorticulturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DHorticulturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
