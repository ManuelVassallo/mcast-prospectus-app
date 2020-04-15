import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KsmsmainaimsPage } from './ksmsmainaims.page';

describe('KsmsmainaimsPage', () => {
  let component: KsmsmainaimsPage;
  let fixture: ComponentFixture<KsmsmainaimsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsmsmainaimsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KsmsmainaimsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
