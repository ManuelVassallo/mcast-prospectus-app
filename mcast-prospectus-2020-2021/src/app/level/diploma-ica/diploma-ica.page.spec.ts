import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomaIcaPage } from './diploma-ica.page';

describe('DiplomaIcaPage', () => {
  let component: DiplomaIcaPage;
  let fixture: ComponentFixture<DiplomaIcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaIcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomaIcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
