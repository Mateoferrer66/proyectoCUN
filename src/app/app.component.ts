import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'proyectoCUN';
  imagen: string = 'assets/Logo.png'; 
  imagen2: string = 'assets/Frame 200.png';  // Ruta de la imagen corregida
  imagen3: string = 'assets/buscarymenu.png';  // Ruta de la imagen corregida
  imagen4: string = 'assets/iconohome.png';  // Ruta de la imagen corregida
}