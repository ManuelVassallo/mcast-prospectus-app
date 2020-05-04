import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorBusinessPage } from './bachelor-business.page';

describe('BachelorBusinessPage', () => {
  let component: BachelorBusinessPage;
  let fixture: ComponentFixture<BachelorBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
