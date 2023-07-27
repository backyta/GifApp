import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const[ categories, setCategories ] = useState([]); //* undefined si no tiene valor incial.

    const onAddCategories = ( NewCategory ) =>{

        //* Validar que sean unicos los nombres que ingresamos, se puede valirdar con find para loweCase
        if (categories.includes (NewCategory) ) return;

        setCategories( [ NewCategory , ...categories] );
        // setCategories( cat => [NewCategory, ...cat]);
    }
    
    return ( 
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } //* on es cuando emite
                onNewCategory = { value => onAddCategories(value) } 
                
            />

            {/* <button onClick={onAddCategories} >Agregar</button> */}
           
            { categories.map( category => ( 
                // return <li key={category}>{category}</li>
                <GifGrid 
                    key={category} 
                    category={ category }  
                />
            )) 
            }
        
        </>
     );
    }




    //? Emitir evento al Padre

    //* Emite un evento del hijo al padre en el hijo se manda el evento onNewCategory con su valor, y en el 
    //* padre se recibe en la funcion y esta la renderiza en el componente

    //* onNewCategory Esta prop recibe el string del input como valor., y lo manda a la funcion del
    //* componente Padre que lo aniade a la lista.

    //?  Se recomuebza no usar el idice en el map para validar los valores unicos
    //? en su lugar debemos usar un identificacdor unico como id, o unico en la iteracion
    //? no se debe usar el indice porque React utuliza el valor dentro de las {  } para
    //? saber cuando se elimino un elemento, si eliminamos una posicion siempre existira
    //? esa posicion en nuestro array y puede regresa resultados inesperados
    //? No usar el { i } para identificador unido (indice) 


    //* no usar push porque retorna el numero de elemnto.
    //* Si no se usa spread ..., se pasa el array como si fuera uno solo sus elementos pro eso se 
    //* imprime seguido

  
