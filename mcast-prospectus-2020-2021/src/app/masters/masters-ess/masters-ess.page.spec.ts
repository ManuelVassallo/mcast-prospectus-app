import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastersEssPage } from './masters-ess.page';

describe('MastersEssPage', () => {
  let component: MastersEssPage;
  let fixture: ComponentFixture<MastersEssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersEssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastersEssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
