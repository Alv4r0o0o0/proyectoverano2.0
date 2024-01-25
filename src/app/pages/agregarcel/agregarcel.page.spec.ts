import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarcelPage } from './agregarcel.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('AgregarcelPage', () => {
  let component: AgregarcelPage;
  let fixture: ComponentFixture<AgregarcelPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
