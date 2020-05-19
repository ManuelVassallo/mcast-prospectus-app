import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcWbBHPage } from './fc-wb-b-h.page';

describe('FcWbBHPage', () => {
  let component: FcWbBHPage;
  let fixture: ComponentFixture<FcWbBHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcWbBHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcWbBHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
