import { ref, onMounted } from 'vue';

export const sidebarController = () => {
    let SideBarDisplay:any
    onMounted(() => {
        const sidebar = document.querySelector('#sidebar') as Element
        const style = window.getComputedStyle(sidebar)
        SideBarDisplay = style.display


    })

    const toggleSidebar = () => { 
        if(SideBarDisplay === 'none'){
            document.querySelector<HTMLElement>('#sidebar')!.style.display = 'block'
        } else {
            document.querySelector<HTMLElement>('#sidebar')!.style.display = 'none'
        }
    }

}