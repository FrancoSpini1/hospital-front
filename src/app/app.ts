import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard/dashboard";
import { TurnoNuevo } from "./turno-nuevo/turno-nuevo/turno-nuevo";
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, TurnoNuevo, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project1');
}
