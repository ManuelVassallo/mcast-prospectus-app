import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelInfoPage } from './level-info.page';

describe('LevelInfoPage', () => {
  let component: LevelInfoPage;
  let fixture: ComponentFixture<LevelInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
