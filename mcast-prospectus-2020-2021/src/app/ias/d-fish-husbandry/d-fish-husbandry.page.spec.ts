import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DFishHusbandryPage } from './d-fish-husbandry.page';

describe('DFishHusbandryPage', () => {
  let component: DFishHusbandryPage;
  let fixture: ComponentFixture<DFishHusbandryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFishHusbandryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DFishHusbandryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
