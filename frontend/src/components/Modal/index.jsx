// Aqui no modal temos a importação de vários módulos
// Depois define duas constantes do pokemon e de seu nome
// Além disso, temos a definição de duas funções "confirm" e "recuse"
// O "confirm" chama a função catchPokemon e fecha o modal e o "recuse" apenas fecha o modal
// No modal o código retorna uma sessão com o título "você encontrou um (nome do pokemon)" junto a imagem
// Por fim, uma div de opções em estilo botão aparece com "capturar" ou "fugir"

import { useContext, useState } from 'react'
import styles from './styles.scss'
import { Context } from '../../context/pokeContext'
import { catchPokemon } from '../../functions/catchPokemon'

const pokemon = 'https://staticg.sportskeeda.com/editor/2022/07/67b3e-16572059076783-1920.jpg'
const pokename = 'Zapidos'

export function Modal({isOpen}){
    const { isModalOpen, setIsModalOpen, modalName, modalImage } = useContext(Context)

    function confirm(){
        catchPokemon(modalName)
        setIsModalOpen(false)
    }

    function recuse(){
        setIsModalOpen(false)
    }

    return (
        isModalOpen &&
        <section className="modal_container">
            <span className='mask'>
                <p className='title'>
                    Você encontrou um {modalName}
                </p>
            </span>
            
            <figure>
                <img src={modalImage} alt="Imagem do pokémon encontrado" />
            </figure>
        
            <div className="options">
                <button onClick={() => confirm()}>Capturar</button>
                <button onClick={() => recuse()}>Fugir</button>
            </div>
        </section>
    )
}