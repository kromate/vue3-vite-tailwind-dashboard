export const RegisterComponents = (App:any): void => {
    const components = import.meta.globEager('../components/core/*.vue')

    Object.entries(components).forEach(([path, definition]) => {

        const componentName = path?.split('/')?.pop()?.replace(/\.\w+$/, '')



        // Register component on this Vue instance
        App.component(componentName, definition.default)
    })

}