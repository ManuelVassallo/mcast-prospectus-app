import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcAppliedSciencePage } from './ic-applied-science.page';

describe('IcAppliedSciencePage', () => {
  let component: IcAppliedSciencePage;
  let fixture: ComponentFixture<IcAppliedSciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcAppliedSciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcAppliedSciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
