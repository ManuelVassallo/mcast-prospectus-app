import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KunsilstudentimcastPage } from './kunsilstudentimcast.page';

describe('KunsilstudentimcastPage', () => {
  let component: KunsilstudentimcastPage;
  let fixture: ComponentFixture<KunsilstudentimcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunsilstudentimcastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KunsilstudentimcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
