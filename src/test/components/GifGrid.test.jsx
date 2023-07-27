/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

//* Hacer el mook, requerimos el hook su path esto no solo srive para hacer mocks de mis propias librerias
//* si no tmb de librerias de terceros.

jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'Goku'

    test('Debe de mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> ) 
        // screen.debug()// con esto vemos como esta el componete renderizado

        expect( screen.getByText('Cargando....'));
        expect( screen.getByText( category ) );

        //* Comprobamos que en el screen haiga los textos cargando y la caregoria.
    });


    test('Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {
        //* Antes de renderizar se debe hacer el mock del hook

        const gifs = [
            {
            id: 'asas',
            title:'Kevin',
            url: 'https://localhost/goku.jpg'
            },
            {
                id: 'AAA',
                title:'Goku',
                url: 'https://localhost/kevin.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/> ) 

        screen.debug()
        expect( screen.getAllByRole('img').length ).toBe( 2 ) 

    });
});

//* El GifGrid no tiene responsabilidad de evaluar que el hook perzonalizado funcione ( useFetchGifs ),
//* esto se hace con una siimulacion.

//* Simular que el useFetchGifs(hook) me va regresar cualquier valor que yo quiera.


