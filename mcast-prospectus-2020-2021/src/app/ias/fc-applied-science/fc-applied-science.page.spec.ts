import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcAppliedSciencePage } from './fc-applied-science.page';

describe('FcAppliedSciencePage', () => {
  let component: FcAppliedSciencePage;
  let fixture: ComponentFixture<FcAppliedSciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcAppliedSciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcAppliedSciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
