import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAnimalCarePage } from './d-animal-care.page';

describe('DAnimalCarePage', () => {
  let component: DAnimalCarePage;
  let fixture: ComponentFixture<DAnimalCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAnimalCarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAnimalCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
