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
import {UsersComponent} from "./users/components/users/users.component";
import {SaveUserComponent} from "./users/components/save-user/save-user.component";
import {UpdateUserComponent} from "./users/components/update-user/update-user.component";
import {AuthGuardService} from "./services/auth.guard";


const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], data: {roles: ['ADMIN']}},

  {
    path: 'fournisseurs',
    component: FournisseursComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER']}
  },
  {
    path: 'fournisseurs/add',
    component: SaveFournisseurComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER']}
  },
  {
    path: 'fournisseurs/update/:id',
    component: UpdateFournisseurComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER']}
  },

  {path: 'users', component: UsersComponent, canActivate: [AuthGuardService], data: {roles: ['ADMIN']}},
  {path: 'users/add', component: SaveUserComponent, canActivate: [AuthGuardService], data: {roles: ['ADMIN']}},
  {path: 'users/update/:id', component: UpdateUserComponent, canActivate: [AuthGuardService], data: {roles: ['ADMIN']}},

  {
    path: 'reactifs',
    component: ReactifsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'reactifs/add',
    component: SaveReactifComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'reactifs/update/:id',
    component: UpdateReactifComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },

  {
    path: 'materials',
    component: MaterialsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'materials/add',
    component: SaveMaterialComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },

  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'patients/save',
    component: SavePatientComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'patients/update/:id',
    component: UpdatePatientComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },

  {
    path: 'echontillons',
    component: EchontillonsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'echontillons/save',
    component: SaveEchontillonComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'echontillons/update/:id',
    component: UpdateEchontillonComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },

  {
    path: 'echontillons/echontillon-analyses/:id',
    component: EchontillonAnalysesComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'echontillon-materials',
    component: EchontillonMaterialsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
  {
    path: 'echontillon-materials/save',
    component: SaveEchontillonMaterialsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },

  {
    path: 'echontillon-materials/update/:id',
    component: UpdateEchontillonMaterialsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN', 'MANAGER', 'TECHNICIAN']}
  },
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
