import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIasPage } from './advanced-diploma-ias.page';

describe('AdvancedDiplomaIasPage', () => {
  let component: AdvancedDiplomaIasPage;
  let fixture: ComponentFixture<AdvancedDiplomaIasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDiplomaIasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDiplomaIasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
