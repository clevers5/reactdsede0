import {render} from '@testing-library/react';
import {FirstApp} from '../FirstApp';

describe('Pruebas en FirstApp', () => { 
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = "Hola mundo";
    //     const { container } = render(<FirstApp title={title}/>);
    //      console.log(container);


    //      //Para hacer match con el snapshot se usa el siguiente comando:
    //     expect(container).toMatchSnapshot();
    // })

    test('Debe de mostrar el titulo en un h1', () => {
        const title = "Hola mundo";
        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);
        
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        //toContain sirve para buscar un texto dentro de un string sin importar los espacios
        
        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const title = "Hola mundo";
        const subtitle = "Soy un subtitulo";
        const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle}/>);
        
        expect(getAllByText(subtitle).length).toBe(2);

    
    })
})