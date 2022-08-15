import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LogoModule} from '../logo/logo.module';
import {InputModule} from '../input/input.module';
import {RouterModule} from '@angular/router';
import {ButtonModule} from '../button/button.module';

@NgModule({
    declarations: [AuthComponent, LoginComponent, RegisterComponent],
    imports: [CommonModule, FormsModule, LogoModule, InputModule, RouterModule, ButtonModule],
})
export class AuthModule {}
