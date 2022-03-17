import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea [] = []
  nombreTarea =  '';

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(){
    //Crear un objeto tarea ....
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // agregar el objeto tarea al array...
    this.listTareas.push(tarea);

    // Reset formulario..
    this.nombreTarea = '';
  }
  //eliminar Tarea..
  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }
  //actualizar tarea..
  actualizarTarea( index: number,tarea: Tarea):void{
    this.listTareas[index].estado = !tarea.estado

  }

}
