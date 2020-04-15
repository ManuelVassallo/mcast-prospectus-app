import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincipalandceoPage } from './principalandceo.page';

describe('PrincipalandceoPage', () => {
  let component: PrincipalandceoPage;
  let fixture: ComponentFixture<PrincipalandceoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalandceoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalandceoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
