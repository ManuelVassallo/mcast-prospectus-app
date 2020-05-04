import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomaIctPage } from './diploma-ict.page';

describe('DiplomaIctPage', () => {
  let component: DiplomaIctPage;
  let fixture: ComponentFixture<DiplomaIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomaIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
