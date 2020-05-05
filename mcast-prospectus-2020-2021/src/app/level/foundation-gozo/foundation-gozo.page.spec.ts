import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationGozoPage } from './foundation-gozo.page';

describe('FoundationGozoPage', () => {
  let component: FoundationGozoPage;
  let fixture: ComponentFixture<FoundationGozoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationGozoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationGozoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
