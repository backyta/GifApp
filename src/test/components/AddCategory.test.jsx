/* eslint-disable no-undef */

import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('Probando el componente AddCategory() ', () => {

    
    test('Deberia de cambiar el valor de la caja de texto ', () => {
        render( <AddCategory onNewCategory={ () => {}} /> );
        
        const input = screen.getByRole('textbox'); //*para input
        
        fireEvent.input( input, { target: { value: 'Saitama' } } )
        
        expect( input.value ).toBe( 'Saitama' )
        // screen.debug();

        //* Primer parametro el que recibe el evento, elsegundo es el evento mismo que dispara 
        //* event.target.value, inserta el value en el input y como se actualiza en el estado
        //* tmb lo toma posteriormente el onNewCategory
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Goku';
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form ); //* se dispara como hacer submit al form, llama al submit

        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

        //* La funcion la manda a llamar con el valor de la caja de texto 'textbox', por eso si pasa
        //* la prueba, el valor de Input se setea en la funcion por eso pasa la prueba.

    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
   
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form')
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled(  );
        //* No se coloca el input del fireevent input para que no lo tome el oneNewCategory
        //* asi se asegura de no llamar a la funcion.
    });
   
});

//* El jest fn , es una funcion que esta marcada como Mock, es una funciuon como una simulacion no es una 
//* implementacion real de la funcion es una simulacion de la funcion.

//* Simula una funcion que es para hacer las pruebas