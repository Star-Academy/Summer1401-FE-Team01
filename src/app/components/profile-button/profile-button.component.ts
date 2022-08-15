import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-profile-button',
    templateUrl: './profile-button.component.html',
    styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService) {}

    public async logout(): Promise<void> {
        await this.authService.logout();
    }

    public get profilePhotoSrc(): string {
        return this.authService.cachedUser?.avatar || 'assets/images/default-profile-picture.svg';
    }
}
