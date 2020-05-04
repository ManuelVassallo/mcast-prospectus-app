import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationIctPage } from './foundation-ict.page';

describe('FoundationIctPage', () => {
  let component: FoundationIctPage;
  let fixture: ComponentFixture<FoundationIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
