import { NgModule } from '@angular/core'
import { Routes , RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "contact", component: AboutComponent},
    {path:"contacts", component: AboutComponent},
    {path:"login", component:LoginComponent},
    {path:"", component:MainComponent},
    {path:"main", component:MainComponent},
    {path:"**", component:NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }