import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DBPage } from './d-b.page';

describe('DBPage', () => {
  let component: DBPage;
  let fixture: ComponentFixture<DBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
