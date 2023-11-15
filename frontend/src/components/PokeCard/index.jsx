//Este componente PokeCard é usado para exibir um cartão com a URL da imagem de um Pokémon.
// Além de claro, importar o código css

import styles from './styles.scss'

export function PokeCard({image}){
    return(
        <figure className="poke_card">
            <img src={image} alt="imagem do pokémon" />
        </figure>
    )
}