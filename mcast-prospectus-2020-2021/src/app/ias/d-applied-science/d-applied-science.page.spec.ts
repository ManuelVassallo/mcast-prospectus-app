import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAppliedSciencePage } from './d-applied-science.page';

describe('DAppliedSciencePage', () => {
  let component: DAppliedSciencePage;
  let fixture: ComponentFixture<DAppliedSciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAppliedSciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAppliedSciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
