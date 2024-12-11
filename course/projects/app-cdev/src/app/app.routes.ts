import { Routes } from '@angular/router';
import { PageDashboardComponent } from './modules/dashboard/views/component/page-dashboard/page-dashboard.component';
import { PageUserComponent } from './modules/user/views/component/page-user/page-user.component';
import { PageLoginComponent } from './modules/auth/views/pages/page-login/page-login.component';
import { NotFoundComponent } from './modules/core/views/components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", redirectTo:"/dashboard", pathMatch:"full"},
    {path:"dashboard", component: PageDashboardComponent},
    {path:"users", component: PageUserComponent},
    {path: "login", component: PageLoginComponent},
    {path:"**", component:NotFoundComponent}
];
