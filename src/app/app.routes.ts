import { Routes } from '@angular/router';
import { LoginComponent } from './domains/Landing/login/login.component';
import { RegisterComponent } from './domains/Landing/register/register.component';
import { LayoutComponent } from './domains/Landing/layout/layout.component';
import { AppLayoutComponent } from './domains/Shared/layout/layout.component';
import { ProfileComponent } from './domains/Users/profile/profile.component';
import { CampeonatosComponent } from './domains/info/campeonatos/campeonatos.component';
import { EditComponent } from './domains/Users/edit/edit.component';
import { SearchComponent } from './domains/Users/search/search.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            }
        ]
    },
    {
        path: "app",
        component: AppLayoutComponent,
        children: [
            {
                path: "my-profile",
                component: ProfileComponent
            }, 
            {
                path: "events",
                component: CampeonatosComponent
            },
            {
                path: "edit-profile",
                component: EditComponent
            },
            {
                path: "search",
                component: SearchComponent
            }
        ]
    }
];
