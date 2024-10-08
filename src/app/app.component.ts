import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { loadStateFromLocalStorage } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadStateFromLocalStorage())
  }

  ngOnDestroy(): void {
  }
}
