import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacelPage } from './listacel.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('ListacelPage', () => {
  let component: ListacelPage;
  let fixture: ComponentFixture<ListacelPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ListacelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
