 import { getElement } from "./utilis";


 const toggleNav = getElement(".toggle-nav")
 const sidebarOverlay = getElement(".sidebar-overlay")
 const closeBtn = getElement(".sidebar-close")
 toggleNav.addEventListener('click', () => {
     slidebarOverlay.classListremove('show')
 });
 closeBtn.addEventListener('click', () => {
     slidebarOverlay.classListremove('hide')
 });