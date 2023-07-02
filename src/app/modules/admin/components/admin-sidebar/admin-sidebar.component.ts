import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  toggleMenu() {
    const sidebar = document.querySelector('.admin-sidebar');
    if (sidebar?.classList.contains('active')) {
      sidebar?.classList.remove('active');
    } else {
      sidebar?.classList.add('active');
    }
    const sidebarLists = document.querySelectorAll('.admin-sidebar-list');

    sidebarLists.forEach(sidebarList => {
      if (sidebarList.classList.contains('active')) {
        sidebarList.classList.remove('active');
      } else {
        sidebarList.classList.add('active');
      }
    });
  }
}
