import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIcaPage } from './advanced-diploma-ica.page';

describe('AdvancedDiplomaIcaPage', () => {
  let component: AdvancedDiplomaIcaPage;
  let fixture: ComponentFixture<AdvancedDiplomaIcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDiplomaIcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDiplomaIcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
