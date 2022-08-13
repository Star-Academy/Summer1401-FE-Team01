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
    public user!: User | null;
    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private userService: UserService
    ) {
        this.user = authService.cachedUser;
    }

    public get profilePhotoSrc(): string {
        return this.user?.avatar || '../../../assets/images/default-profile-picture.svg';
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
        await this.router.navigateByUrl('/');
    }

    public submitPhoto(event: Event): void {
        const file = (event.target as HTMLInputElement)!.files!.item(0)!;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (): Promise<void> => {
            const base64Img = reader.result as string;
            const response = await this.userService.alterUserInfo('avatar', base64Img);
            if (response) this.user!.avatar = base64Img;
        };
        reader.onerror = (_): void => {
            this.snackbarService.show({text: 'دریافت تصویر با خطا روبرو شد!', theme: SnackbarTheme.DANGER});
        };
    }
}
