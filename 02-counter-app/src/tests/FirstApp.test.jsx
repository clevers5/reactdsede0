import {render} from '@testing-library/react';
import {FirstApp} from '../FirstApp';

describe('Pruebas en FirstApp', () => { 
    test('Debe de hacer match con el snapshot', () => {
        const title = "Hola mundo";
        const { container } = render(<FirstApp title={title}/>);
         console.log(container);


         //Para hacer match con el snapshot se usa el siguiente comando:
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el titulo en un h1', () => {
        const title = "Hola mundo";
        const { container, getByText } = render(<FirstApp title={title}/>);
        
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        //toContain sirve para buscar un texto dentro de un string sin importar los espacios
    })
 
})