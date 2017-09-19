import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangelistComponent} from './ChangeModule/changelist/changelist.component'

const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'',},
{path:'changelist', pathMatch:'full', component:ChangelistComponent},
{path:'change/:ID', pathMatch:'full', redirectTo:'',},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}