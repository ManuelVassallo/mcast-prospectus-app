import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIcsPage } from './advanced-diploma-ics.page';

describe('AdvancedDiplomaIcsPage', () => {
  let component: AdvancedDiplomaIcsPage;
  let fixture: ComponentFixture<AdvancedDiplomaIcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDiplomaIcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDiplomaIcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
