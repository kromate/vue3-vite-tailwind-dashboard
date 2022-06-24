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
            document.querySelector<HTMLElement>('main#app')!.style.marginLeft = '270px'
            SideBarDisplay = 'block'
        } else {
            document.querySelector<HTMLElement>('#sidebar')!.style.display = 'none'
             document.querySelector<HTMLElement>('main#app')!.style.marginLeft = '0px'
            SideBarDisplay = 'none'
        }
    }
    
return {toggleSidebar}
}