/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en hook perzonalisado useFetchGifs', () => {
    
    test('Debe de regresar el estado inicial', () => {

        const{ result } = renderHook( () => useFetchGifs( 'Goku') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy()
        // console.log(result);
        //* No se lanza ela funcion interna en el useEffect
    });

    //? Test para cuando se ejecute la funcion que actualiza los estados, fetch getImages()

    test('Debe de retornar un array de imagenes y el isLoadign en false', async () => {

        const{ result } = renderHook( () => useFetchGifs( 'Goku') );

        //? Espera a que esta condicion se cumpla, espera a que el currente.lengt sea mayor a 0,
        //? porque habra resultados en el array de images, como un await

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).not.toBeTruthy()
        // console.log(result);
       
    });
});

//* Usualmente con los hook perzonalizados lo que vamos a evaluar los arguemntos de entrada y de salida.

