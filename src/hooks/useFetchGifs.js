import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const[ images, setImages ] = useState([]);
    const[ isLoading, setIsLoading ] = useState( true );

    const getImages = async() =>{
        const newImages = await getGifs( category ); //* lista de objetos de la promesa resuelta
        setImages( newImages ) //* setea o actualiza el estado con la lista
        setIsLoading( false )
    }

    useEffect(() => {
        getImages(); //* ejecuta la funcion que regresa actualiza el estado, y se renderiza una vez

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        images: images,
        isLoading: isLoading
        //* retorno del objeto que se usara en el custom hook, para renderozar el componente.
    }
}
 
//* Si regresa JSX es un functional Component
//? pero si se retorna un objeto que dentro tenga cualquier cosa, eso es un hook, no es mas que una funcion 
//? que regresa algo. 