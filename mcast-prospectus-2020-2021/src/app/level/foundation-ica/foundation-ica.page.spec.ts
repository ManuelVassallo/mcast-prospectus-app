import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationIcaPage } from './foundation-ica.page';

describe('FoundationIcaPage', () => {
  let component: FoundationIcaPage;
  let fixture: ComponentFixture<FoundationIcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationIcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationIcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
