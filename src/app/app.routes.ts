import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersAllComponent } from './users/users-all/users-all.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CreateNewPasswordComponent } from './auth/create-new-password/create-new-password.component';
import { ConfirmRegistrationComponent } from './auth/confirm-registration/confirm-registration.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ConfirmRegistrationInfoComponent } from './auth/confirm-registration-info/confirm-registration-info.component';
import { SearchUsersComponent } from './users/search-users/search-users.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},

    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'auth/confirm-registration-info', component: ConfirmRegistrationInfoComponent},
    {path: 'auth/confirm/registration/:uniqueRegistrationConfirmationLink', component: ConfirmRegistrationComponent},
    {path: 'auth/reset-password', component: ResetPasswordComponent},
    {path: 'auth/create/new/password/:urpt', component: CreateNewPasswordComponent},
    
    {path: 'users/users-all', component: UsersAllComponent},
    {path: 'users/users-search', component: SearchUsersComponent},
    {path: 'users/user-profile', component: UserProfileComponent},
    {path: 'users/user-update/:userId', component: UserUpdateComponent}
];
