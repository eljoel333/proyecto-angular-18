import { Routes } from '@angular/router';
import { PageDashboardComponent } from './modules/dashboard/views/component/page-dashboard/page-dashboard.component';
import { PageUserComponent } from './modules/user/views/component/page-user/page-user.component';
import { PageLoginComponent } from './modules/auth/views/pages/page-login/page-login.component';
import { NotFoundComponent } from './modules/core/views/components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", redirectTo:"/dashboard", pathMatch:"full"},
    {path:"dashboard", 
        loadComponent:()=>
            import("./modules/dashboard/views/component/page-dashboard/page-dashboard.component").then(m=>m.PageDashboardComponent),
    },
    {path:"users", 
        loadComponent:()=>
            import('./modules/user/views/component/page-user/page-user.component').then((m)=> m.PageUserComponent),
    },
    {path: "login", component: PageLoginComponent},
    {path:"course", 
        loadComponent:()=>
            import('./modules/course/views/component/page-course/page-course.component').then((m)=> m.PageCourseComponent),
    },
    {path:"schedule", 
        loadComponent:()=>
            import('./modules/schedule/views/component/page-schedule/page-schedule.component').then((m)=> m.PageScheduleComponent),
    },
    {path:"**", component:NotFoundComponent}
];
