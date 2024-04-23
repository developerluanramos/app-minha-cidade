import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {

}
