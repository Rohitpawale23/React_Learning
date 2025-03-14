



function customRender(reactElement, container)
{
    // First Version : code to set attribute is repeating
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    //  To avoid repeatation : Use for in loop
    for (const prop in reactElement.props) {

        if(prop === 'children') continue ;
        domElement.setAttribute(prop , reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// react element creation

// This is the actual implementation of the jsx elelment it will be managed by vite budler automatically
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children : 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

// method/function to render the react
customRender(reactElement, mainContainer)


