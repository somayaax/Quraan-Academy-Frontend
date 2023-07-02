import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  toggleMenu() {
    const sidebarList = document.querySelector('.chapter-sidebar-list');
  
    if (sidebarList) {
      if (sidebarList.classList.contains('active')) {
        sidebarList.classList.remove('active');
      } else {
        sidebarList.classList.add('active');
      }
    }
  }
}
