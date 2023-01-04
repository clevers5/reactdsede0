
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

const initialValue = 100;
describe('Pruebas en CounterApp', () => { 
    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp/>);
        expect(container).toMatchSnapshot();
     })

     test('Debe de mostrar el valor inicial de 100', () => {
        
        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
     
    });

    test('Debe de incrementar con el botón +1', () => {
    
        render(<CounterApp value={initialValue}/>);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de decrementar con el botón -1', () => {
    
        render(<CounterApp value={initialValue}/>);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe de colocar el valor por defecto con el botón Reset', () => {
    
        render(<CounterApp value={3358}/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        // fireEvent.click( screen.getByText('Reset'));
        
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(3358)).toBeTruthy();
    
    });
 })