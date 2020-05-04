import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaBusinessPage } from './advanced-diploma-business.page';

describe('AdvancedDiplomaBusinessPage', () => {
  let component: AdvancedDiplomaBusinessPage;
  let fixture: ComponentFixture<AdvancedDiplomaBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDiplomaBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDiplomaBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
