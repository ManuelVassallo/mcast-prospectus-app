import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresidentPage } from './president.page';

describe('PresidentPage', () => {
  let component: PresidentPage;
  let fixture: ComponentFixture<PresidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
