import { Component,signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-login,form-field-prefix-suffix-example',
  imports: [MatFormField,MatInputModule,MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
