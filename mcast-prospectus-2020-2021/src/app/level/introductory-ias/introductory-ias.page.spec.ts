import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductoryIasPage } from './introductory-ias.page';

describe('IntroductoryIasPage', () => {
  let component: IntroductoryIasPage;
  let fixture: ComponentFixture<IntroductoryIasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryIasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductoryIasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
