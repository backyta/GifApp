/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en Component GifItem', () => {

    const props = {
        title: 'Ttitulo prueba',
        url: 'http://localhost/url-prueba'
    }

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <GifItem { ...props } /> )
        expect( container ).toMatchSnapshot();
        
    });

    test('Debe de mostrar lka imagen con la URL y el ALT indicado', () => {
        render( <GifItem { ...props } /> );

        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( props.url ) 
        //* manera resumida y elegante, destructuring
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( props.url );
        expect( alt ).toBe( props.title );

    });

    test('Debe de mostrar el titulo en el componente', () => {

        render( <GifItem { ...props } /> )
        expect( screen.getByText( title )).toBeTruthy(); 
        
        //* evalua un texto no una propiedad de etiqueta que llava el mismo titulo
    });
    
});

//* El snapshot no me asegura de que la imagen este correctemente colocado o el titulo.
//* Snapshot asegura que al momento de ejecutar las pruebas toda las piezas del HTML sintacticamenter
//* esten igual como yo tome la fotografia inicialmente.
