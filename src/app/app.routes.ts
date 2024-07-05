import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultoComponent } from './culto/culto.component';
import { ContatoComponent } from './contato/contato.component';
import { TestemunhoComponent } from './testemunho/testemunho.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HorarioComponent } from './horario/horario.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: CultoComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'contato', component: ContatoComponent },
    // { path: 'horario', component: HorarioComponent },
    { path: 'testemunho', component: TestemunhoComponent }
];
