import { CommonModule } from "@angular/common";
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { NgModule } from "@angular/core";
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        heroeComponent,
        ListadoComponent  
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}