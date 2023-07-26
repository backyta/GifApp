
export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RykxRl7hHNUVD5kTSHENLmkQzpkF1X6q&q=${category}&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(gifs);
    return gifs
}

//* En produccion no aparecera el doble array de objetos en la consola porque es parte del modo estricto
//* en desarrollo, asi mismo lo que se imprime en consola al agreagr un category nuevo si mantiene
//* el estado anterior.