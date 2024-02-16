import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {DashboardComponent} from './dashboard/components/dashboard/dashboard.component';
import {FournisseursComponent} from './fournisseurs/components/fournisseurs/fournisseurs.component';
import {SaveFournisseurComponent} from './fournisseurs/components/save-fournisseur/save-fournisseur.component';
import {UpdateFournisseurComponent} from './fournisseurs/components/update-fournisseur/update-fournisseur.component';
import {ReactifsComponent} from './reactifs/components/reactifs/reactifs.component';
import {SaveReactifComponent} from './reactifs/components/save-reactif/save-reactif.component';
import {UpdateReactifComponent} from './reactifs/components/update-reactif/update-reactif.component';
import {MaterialsComponent} from './materials/components/materials/materials.component';
import {SaveMaterialComponent} from './materials/components/save-material/save-material.component';
import {PatientsComponent} from './patients/components/patients/patients.component';
import {SavePatientComponent} from './patients/components/save-patient/save-patient.component';
import {UpdatePatientComponent} from './patients/components/update-patient/update-patient.component';
import {
  EchontillonAnalysesComponent
} from './echontillons/components/echontillon-analyses/echontillon-analyses.component';
import {SaveEchontillonComponent} from './echontillons/components/save-echontillon/save-echontillon.component';
import {EchontillonsComponent} from './echontillons/components/echontillons/echontillons.component';
import {UpdateEchontillonComponent} from './echontillons/components/update-echontillon/update-echontillon.component';
import {
  EchontillonMaterialsComponent
} from './echontillon-materials/components/echontillon-materials/echontillon-materials.component';
import {
  SaveEchontillonMaterialsComponent
} from './echontillon-materials/components/save-echontillon-materials/save-echontillon-materials.component';
import {
  UpdateEchontillonMaterialsComponent
} from './echontillon-materials/components/update-echontillon-materials/update-echontillon-materials.component';
import {LoginComponent} from "./login/component/login.component";


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fournisseurs', component: FournisseursComponent},
  {path: 'fournisseurs/add', component: SaveFournisseurComponent},
  {path: 'fournisseurs/update/:id', component: UpdateFournisseurComponent},

  {path: 'reactifs', component: ReactifsComponent},
  {path: 'reactifs/add', component: SaveReactifComponent},
  {path: 'reactifs/update/:id', component: UpdateReactifComponent},

  {path: 'materials', component: MaterialsComponent},
  {path: 'materials/add', component: SaveMaterialComponent},

  {path: 'patients', component: PatientsComponent},
  {path: 'patients/save', component: SavePatientComponent},
  {path: 'patients/update/:id', component: UpdatePatientComponent},

  {path: 'echontillons', component: EchontillonsComponent},
  {path: 'echontillons/save', component: SaveEchontillonComponent},
  {path: 'echontillons/update/:id', component: UpdateEchontillonComponent},
  {path: 'echontillons/echontillon-analyses/:id', component: EchontillonAnalysesComponent},

  {path: 'echontillon-materials', component: EchontillonMaterialsComponent},
  {path: 'echontillon-materials/save', component: SaveEchontillonMaterialsComponent},
  {path: 'echontillon-materials/update/:id', component: UpdateEchontillonMaterialsComponent},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
