import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
    // console.log({ images, isLoading });

    return ( 
        <>
            <h3>{ category }</h3>
            {
                //* Mostrar mensaje de carga
                isLoading && ( <h2>Cargando....</h2> ) //* remplaza al ternario, otra opcion no usa null :
                
            }
            

            <div className='card-grid'>
                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id} 
                            { ...image } //* esparcir el objeto para que tenga todas sus propiedades
                        />
                    ))
                }  
            </div>

        </>
     );
}
    
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

    
//* Nunca se debe colocar la ejecucion de una funcion deirecto en un componente, porquie cada vez que 
//* el functional component se vuelva a renderizar va volver a ejecutar la funcion, por consecuencia 
//* vuelve a ejecutar la peticion http.

//* Si ya recibimos la categoria solo se ejecuta una vez esa funcion, la peticion no se volvera a asignar
//* esapcio en memoria por eso se coloca fuera. No importa si se redibuja, la peticion no se volvera a lanzar

//? USE EFECT
//* Es un hook de react que sirve para disparar efectos secundarios, se entiendo como algun proceso que queremos
//* ejecutar cuando algo suceda.

//* Recibe 2 parametros, el efecto que es un callback ques una funcion, y luego una lista de dependencias
//* que son las condiciones por las cuales queremos volver a ejecutar el callback.

//* Si se deja las dependencias vacias significa que el hook solo se va disparar la priemra vez que se crea
//* y se construye el componente.

//? UseState y UseEfect
//* useState mantiene/guarda/recuerda los valores de tu Componente, esto es en lo que React se "especializa" o 
//* el principal trabajo que hace.

//? Use Efect
//* useEffect (efectos secundarios) es como un puente entre tu componente y el mundo exterior, como:
    //* API en un servidor remoto: Donde quieres recibir informacion y mostrarlo en tu Componente   
    //* (actualizando su estado).
    //* Eventos del mouse en la pantalla: Puedes escuchar estos eventos y actualizar tu estado del Componente.