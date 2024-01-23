import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XiaomiPage } from './xiaomi.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('XiaomiPage', () => {
  let component: XiaomiPage;
  let fixture: ComponentFixture<XiaomiPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(XiaomiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
