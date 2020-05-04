import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationIasPage } from './foundation-ias.page';

describe('FoundationIasPage', () => {
  let component: FoundationIasPage;
  let fixture: ComponentFixture<FoundationIasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationIasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationIasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
