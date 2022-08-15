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

    public readonly IMAGE_MAX_SIZE = 5 * 1024 * 1024; // 5MB

    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private userService: UserService
    ) {
        this.user = authService.cachedUser!;
    }

    public editField(field: keyof User, newValue: string): void {
        this.user = {...this.user, [field]: newValue};
        this.authService.cachedUser = this.user;
    }

    public get profilePhotoSrc(): string {
        return this.user.avatar || 'assets/images/default-profile-picture.svg';
    }

    public submitPhoto(event: Event): void {
        const file = (event.target as HTMLInputElement)!.files!.item(0)!;
        if (file.size > this.IMAGE_MAX_SIZE) {
            this.snackbarService.show({
                text: `اندازه فایل باید کمتر از ${this.IMAGE_MAX_SIZE / (1024 * 1024)}MB باشد`,
                theme: SnackbarTheme.DANGER,
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (): Promise<void> => {
            const base64Img = reader.result as string;

            const response = await this.userService.alterUserInfo('avatar', base64Img);
            if (response) this.editField('avatar', base64Img);
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
