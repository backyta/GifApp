
import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const[inputValue, setInputValue]= useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return; //* mas de un caracter

        // console.log( inputValue );
        // console.log(setCategories);
        // setCategories( categories =>  [inputValue, ...categories] ); 
        //* categorias en el mestado actual sin necesidad de enviar un porps de categories

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return ( 

        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }//* recive el evento de onchange como parametro
            />
        </form>


     );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}