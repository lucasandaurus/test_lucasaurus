import { Component } from '@angular/core';

@Component ({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'
})
export class FrutaComponent {
    public nombre_componente = 'Componente de frutas';
    public listado_frutas = 'Naranja, manzana, sandia, pera.... y mas'
}