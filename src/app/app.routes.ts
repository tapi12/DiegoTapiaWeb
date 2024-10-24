import { Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { authGuard } from './src/components';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    { path: 'home', component: WelcomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'userInfo', component: UserInfoComponent, canActivate: [authGuard] },
    { path: 'project', component: ProjectComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al home si no hay ruta específica
    { path: '**', redirectTo: '/home' }, // Manejo de rutas no encontradas
    
];
