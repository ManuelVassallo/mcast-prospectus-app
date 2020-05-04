import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomaIasPage } from './diploma-ias.page';

describe('DiplomaIasPage', () => {
  let component: DiplomaIasPage;
  let fixture: ComponentFixture<DiplomaIasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaIasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomaIasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
