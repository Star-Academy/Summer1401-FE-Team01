import {Component} from '@angular/core';
import {SnackbarService} from '../../../../services/snackbar.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {User} from '../../../../models/user.model';
import {SnackbarTheme} from '../../../../enums/snackbar-theme.enum';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../../auth-form.scss'],
})
export class RegisterComponent {
    public username!: string;
    public password!: string;
    public confirm!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;

    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) {}

    public get user(): Partial<User> {
        const user: Partial<User> = {password: this.password, email: this.email, username: this.username};

        if (this.firstName) user.firstName = this.firstName;
        if (this.lastName) user.lastName = this.lastName;

        return user;
    }

    public async formSubmitHandler(): Promise<void> {
        if (await this.isSubmitSuccessful()) await this.router.navigateByUrl('/profile');
    }

    public async isSubmitSuccessful(): Promise<boolean> {
        if (this.password !== this.confirm) {
            this.snackbarService.show({text: 'پسورد و تکرار آن باهم همخوانی ندارند', theme: SnackbarTheme.DANGER});
            this.password = '';
            this.confirm = '';
            return false;
        }

        return await this.authService.register(this.user);
    }
}
