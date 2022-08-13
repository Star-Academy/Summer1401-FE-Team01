import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {SnackbarService} from '../../services/snackbar.service';
import {SnackbarTheme} from '../../enums/snackbar-theme.enum';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public user!: User;
    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private userService: UserService
    ) {
        this.user = authService.cachedUser!;
    }

    public async editField(field: string, newValue: string): Promise<void> {
        const response = await this.userService.alterUserInfo(field, newValue);
        if (response) {
            switch (field) {
                case 'username':
                    this.user.username = newValue;
                    break;
                case 'password':
                    this.user.password = newValue;
                    break;
                case 'email':
                    this.user.email = newValue;
                    break;
                case 'phone':
                    this.user.phone = newValue;
                    break;
                case 'firstName':
                    this.user.firstName = newValue;
                    break;
                case 'lastName':
                    this.user.lastName = newValue;
                    break;
                case 'dateOfBirth':
                    this.user.dateOfBirth = newValue;
                    break;
                case 'avatar':
                    this.user.avatar = newValue;
                    break;
                default:
                    throw new Error(`Invalid Field: ${field}`);
            }
        }
    }

    public get profilePhotoSrc(): string {
        return this.user.avatar || '../../../assets/images/default-profile-picture.svg';
    }

    public submitPhoto(event: Event): void {
        const file = (event.target as HTMLInputElement)!.files!.item(0)!;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (): Promise<void> => {
            const base64Img = reader.result as string;
            await this.editField('avatar', base64Img);
        };
        reader.onerror = (_): void => {
            this.snackbarService.show({text: 'دریافت تصویر با خطا روبرو شد!', theme: SnackbarTheme.DANGER});
        };
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
        await this.router.navigateByUrl('/');
    }
}
