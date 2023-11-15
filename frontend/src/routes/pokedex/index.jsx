// Este é um componente React chamado Pokedex que contém a lógica para uma página de Pokedex do projeto.
// Importações: os estilos SCSS, o componente Header, vários hooks do React (useEffect, useState), 
// algumas funções auxiliares do projeto e um ícone de pesquisa do pacote "react-icons".
// O "useEffect" hook é usado para chamar a função "verifyToken" para verificar a autenticidade do usuário 
// e para fazer uma solicitação GET para '/pokemons' na API para buscar todos os pokémons.
// A função "search" filtra a lista "itemsToSearch" com base no "searchTerm" e atualiza os pokemons com o resultado da pesquisa.
// Renderização: O componente renderiza um Header, uma área de pesquisa e uma lista de cartões de Pokémon. 
// Cada cartão contém uma imagem e uma descrição do Pokémon.

import './styles.scss'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { findPokemon } from '../../functions/findPokemon'
import { getAllPokemons } from '../../functions/getAllPokemons'
import { api } from '../../functions/api'
import { verifyToken } from '../../functions/verifyToken'
import { AiOutlineSearch } from 'react-icons/ai'

const pokemons = ['','','','','','','']

export function Pokedex(){
    const [activeIndex, setActiveIndex] = useState()
    const [pokemons, setPokemons] = useState([])
    const [itemsToSearch, setItemsToSearch] = useState([''])
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
            
            await api.get('/pokemons')
            .then(({ data }) => {
                setPokemons(data)
                setItemsToSearch(data)
            })
        }
        fetchData()
        const storedData = localStorage.getItem('userValues')
        setData(JSON.parse(storedData))
        setIsLoading(false)
    }, [])

    async function search(){
        const searchResult = itemsToSearch.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

        setPokemons(searchResult)
    }

    return(
        <section className='pokedex_page'>
            <Header />
            <div className="search_area">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='pesquise um pokémon' />
                <button onClick={() => search()}><AiOutlineSearch></AiOutlineSearch></button>
            </div>
            <div className="container">
                {
                    pokemons &&
                    pokemons.map((pokemon, index) => (
                        <div className={`card ${activeIndex === index ? 'active': ''} `} onClick={() => setActiveIndex(index)}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <p>
                                {pokemon.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}