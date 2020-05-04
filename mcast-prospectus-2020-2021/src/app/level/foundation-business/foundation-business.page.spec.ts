import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationBusinessPage } from './foundation-business.page';

describe('FoundationBusinessPage', () => {
  let component: FoundationBusinessPage;
  let fixture: ComponentFixture<FoundationBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
