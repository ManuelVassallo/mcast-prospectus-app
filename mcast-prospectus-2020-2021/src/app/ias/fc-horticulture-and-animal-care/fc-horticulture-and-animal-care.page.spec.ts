import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcHorticultureAndAnimalCarePage } from './fc-horticulture-and-animal-care.page';

describe('FcHorticultureAndAnimalCarePage', () => {
  let component: FcHorticultureAndAnimalCarePage;
  let fixture: ComponentFixture<FcHorticultureAndAnimalCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcHorticultureAndAnimalCarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcHorticultureAndAnimalCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
