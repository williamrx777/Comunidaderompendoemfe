import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultoComponent } from './culto/culto.component';
import { ContatoComponent } from './contato/contato.component';
import { TestemunhoComponent } from './testemunho/testemunho.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'culto', component: CultoComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'testemunho', component: TestemunhoComponent }
];
