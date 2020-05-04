import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomaBusinessPage } from './diploma-business.page';

describe('DiplomaBusinessPage', () => {
  let component: DiplomaBusinessPage;
  let fixture: ComponentFixture<DiplomaBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomaBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
