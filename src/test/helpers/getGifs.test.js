/* eslint-disable no-undef */

import { getGifs } from "../../helpers/getGifs";

describe('Porbando la funcion getGifs(0', () => {
    
    test('Debe de retornar un arreglo de Gifs ', async () => {
        
        const gifs = await getGifs('Naruto');
        // console.log(gifs);

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String),
            title: expect.any( String),
            url: expect.any( String)
        });

    });
});