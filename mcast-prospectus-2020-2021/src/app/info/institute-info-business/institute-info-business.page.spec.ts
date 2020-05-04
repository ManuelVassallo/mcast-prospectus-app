import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteInfoBusinessPage } from './institute-info-business.page';

describe('InstituteInfoBusinessPage', () => {
  let component: InstituteInfoBusinessPage;
  let fixture: ComponentFixture<InstituteInfoBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteInfoBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteInfoBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
