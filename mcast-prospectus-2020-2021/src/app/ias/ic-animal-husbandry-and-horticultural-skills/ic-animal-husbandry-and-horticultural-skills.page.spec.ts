import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcAnimalHusbandryAndHorticulturalSkillsPage } from './ic-animal-husbandry-and-horticultural-skills.page';

describe('IcAnimalHusbandryAndHorticulturalSkillsPage', () => {
  let component: IcAnimalHusbandryAndHorticulturalSkillsPage;
  let fixture: ComponentFixture<IcAnimalHusbandryAndHorticulturalSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcAnimalHusbandryAndHorticulturalSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcAnimalHusbandryAndHorticulturalSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
