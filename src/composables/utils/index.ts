import { ref } from "vue"

export const sidebarController = () => {
    const sidebar = document.querySelector('#sidebar') as Element
    const style= window.getComputedStyle(sidebar)
    console.log(style.display);
}