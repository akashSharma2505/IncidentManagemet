import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangeComponent} from './ChangeModule/change/change.component'

const routes: Routes = [
{path:'/', pathMatch:'full', redirectTo:'',},
{path:'/change', pathMatch:'full', component:ChangeComponent},
{path:'/admin', pathMatch:'full', redirectTo:'',},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}