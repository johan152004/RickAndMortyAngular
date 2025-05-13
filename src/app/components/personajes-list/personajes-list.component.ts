// personajes-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrl: './personajes-list.component.css'
})
export class PersonajesListComponent implements OnInit {
  personajesList: any[] = [];
  personajeSelect: any = null;
  searchName: string = '';
  selectedStatus: string = '';
  statusOptions = ['', 'Alive', 'Dead', 'unknown'];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajesService.getPersonajes(this.searchName, this.selectedStatus)
      .subscribe(response => {
        this.personajesList = response.results;
        this.personajeSelect = null;
      });
  }

  verDetalle(id: number): void {
    this.personajesService.getPersonajeById(id)
      .subscribe(response => {
        this.personajeSelect = response;
      });
  }

  volverALista(): void {
    this.personajeSelect = null;
  }

  buscar(): void {
    this.getPersonajes();
  }
}