import { ref, onMounted } from 'vue';

export const sidebarController = () => {
    let SideBarDisplay:any
    onMounted(() => {
        const sidebar = document.querySelector('#sidebar') as Element
        const style = window.getComputedStyle(sidebar)
        SideBarDisplay = style.display


    })

    const toggleSidebar = () => { 
        console.log(SideBarDisplay);
        if(SideBarDisplay === 'none'){
            document.querySelector<HTMLElement>('#sidebar')!.style.display = 'block'
            SideBarDisplay = 'block'
        } else {
            document.querySelector<HTMLElement>('#sidebar')!.style.display = 'none'
            SideBarDisplay = 'none'
        }
    }
return {toggleSidebar}
}