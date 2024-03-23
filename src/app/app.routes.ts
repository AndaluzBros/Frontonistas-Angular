import { Routes } from '@angular/router';
import { LoginComponent } from './domains/Landing/login/login.component';
import { RegisterComponent } from './domains/Landing/register/register.component';
import { LayoutComponent } from './domains/Landing/layout/layout.component';

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
];
