import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html'
})
export class AppHeader implements OnInit {
    user: any = { username: "" };
    ngOnInit() {
        this.user.username = localStorage.getItem("username");
    }
    // public disabled = false;
    // public status: {isopen: boolean} = {isopen: false};
    //
    // public toggled(open: boolean): void {
    //   console.log('Dropdown is now: ', open);
    // }
    //
    // public toggleDropdown($event: MouseEvent): void {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    //   this.status.isopen = !this.status.isopen;
    // }
}