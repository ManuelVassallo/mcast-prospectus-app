import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstitutesummaryPage } from './institutesummary.page';

describe('InstitutesummaryPage', () => {
  let component: InstitutesummaryPage;
  let fixture: ComponentFixture<InstitutesummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutesummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutesummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
