// Componente React chamado "Pokemons" para uma página que exibe os pokémons capturados pelo usuário.
// Importações: O componente Header, PokeCard, uma imagem de logo, os estilos SCSS e vários hooks do React, bem como uma função de verificação de token do projeto.
// Inicialização de estado: O componente "Pokemons" inicializa dois estados usando o "useState" hook: "isLoading" 
// para controlar o estado de carregamento da página e data para armazenar os dados do usuário.
// O "useEffect" hook é usado para chamar a função "verifyToken" para verificar a autenticidade do usuário 
// Renderização: O componente renderiza um "Header" com os pokemons capturados pelo usuário


import { Header } from '../../components/Header'
import { PokeCard } from '../../components/PokeCard'
import logo from '../../assets/logo.png'
import styles from './styles.scss'
import { useEffect, useState } from 'react'
import { verifyToken } from '../../functions/verifyToken'


export function Pokemons(){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
        }
        fetchData()
        const storedData = localStorage.getItem('userValues')
        setData(JSON.parse(storedData))
        setIsLoading(false)
    }, [])

    return(
        !isLoading &&
        <section className='my_pokemons_section'>
            <Header />
            <div className="main_title_area">
                <img src={logo} alt="logo do pokémon" className='logo' />
                <h2>Pokémons Capturados</h2>
            </div>
            <div className="pokemons_container">
                {
                    data.map((item) => (
                        <PokeCard image={item.image} />
                    ))
                }
            </div>
        </section>
    )
}