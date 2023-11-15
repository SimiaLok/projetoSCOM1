// Este componente Header é usado como a barra de navegação superior na aplicação React, que exibe a hora atual. 
// Além disso, tem-se os links para as páginas 'Mapa', 'Meus Pokémons' e 'Pokédex'. 
// Ou seja, temos a importação e exportação do relógio, dos links e do código scss. 

import { Watch } from "../Watch"
import { Link } from "react-router-dom";
import styles from './styles.scss'

export function Header(trackHour = true){
    return (
        <header id="topbar">
            <Watch /> 
            <nav>
                <ul>
                    <li><Link to={"/mapa"}>Mapa</Link></li>
                    <li><Link to={"/meus-pokemons"}>Meus Pokémons</Link></li>
                    <li><Link to={"/pokedex"}>Pokédex</Link></li>
                </ul>
            </nav>
        </header>
    )
}
