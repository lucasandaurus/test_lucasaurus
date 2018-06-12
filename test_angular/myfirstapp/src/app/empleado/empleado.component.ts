import { Component } from '@angular/core';

@Component ({
    selector: 'empleado-tag',
    templateUrl:'./empleado.component.html'
})
export class EmpleadoComponent {
    public nombre_componente = 'Componente de empleados';
    public listado_empleados = 'juan, luis, maria, marta.... y mas, muchos mas'
}