import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultoComponent } from './culto/culto.component';
import { ContatoComponent } from './contato/contato.component';
import { TestemunhoComponent } from './testemunho/testemunho.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HorarioComponent } from './horario/horario.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { EventoComponent } from './evento/evento.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'culto', component: CultoComponent },
    // { path: 'galeria', component: GaleriaComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'quemsomos', component: QuemsomosComponent },
    // { path: 'evento',  component: EventoComponent}
    // { path: 'horario', component: HorarioComponent },
    // { path: 'testemunho', component: TestemunhoComponent }
];
