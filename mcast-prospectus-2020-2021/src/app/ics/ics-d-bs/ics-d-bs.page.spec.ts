import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsDBsPage } from './ics-d-bs.page';

describe('IcsDBsPage', () => {
  let component: IcsDBsPage;
  let fixture: ComponentFixture<IcsDBsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsDBsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsDBsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
