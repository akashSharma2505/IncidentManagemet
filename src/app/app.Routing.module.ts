import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangelistComponent} from './changedash/changelist/changelist.component'
import {ChangesummaryComponent} from './changedash/changesummary/changesummary.component'

const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'',},
{path:'changelist', pathMatch:'full', component:ChangelistComponent},
{path:'changesummary/:ID', pathMatch:'full', component:ChangesummaryComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}