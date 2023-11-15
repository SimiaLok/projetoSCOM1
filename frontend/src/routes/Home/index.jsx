// Este é um componente React chamado "Home" que contém a lógica para uma página inicial do Jogo.
// Importações: Hooks do React (useContext, useEffect, useState), funções auxiliares, componentes e css do projeto.
// Renderização: O componente renderiza uma série de elementos incluindo um modal, um cabeçalho, um mapa 
// e um botão de viagem. A posição do personagem é controlada dinamicamente usando o estado "charPosition".

import { useContext, useEffect, useState } from 'react'
import './styles.scss'

import { charmove } from '../../functions/charmove'
import { verifyToken } from '../../functions/verifyToken'
import { Header } from '../../components/Header'
import { findPokemon } from '../../functions/findPokemon'
import { Modal } from '../../components/Modal'
import { Context } from '../../context/pokeContext'
import { TravelButton } from '../../components/TravelButton'

export function Home(){
    const [isLoading, setIsLoading] = useState(true)
    const [steps, setSteps] = useState(0)
    const[isModalOpen, setIsModalOpen] = useState(false)
    const context = useContext(Context);
    const { dayTime } = useContext(Context);

    useEffect(() => {
      document.body.classList.add('overflow-hidden');
  
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
            setIsLoading(false)
        }
        fetchData()
    }, [])

    useEffect(() => {
      const handleKeyDown = (e) => {
        const speed = 5; 
        const maxX = window.innerWidth - 100; 
        const maxY = window.innerHeight - 40; 
    
        switch (e.key) {
          case 'ArrowUp':
            setCharPosition((prev) => ({ x: prev.x, y: Math.max(prev.y - speed, 0) }));
            break;
          case 'ArrowDown':
            setCharPosition((prev) => ({ x: prev.x, y: Math.min(prev.y + speed, maxY) }));
            break;
          case 'ArrowLeft':
            setCharPosition((prev) => ({ x: Math.max(prev.x - speed, 0), y: prev.y }));
            break;
          case 'ArrowRight':
            setCharPosition((prev) => ({ x: Math.min(prev.x + speed, maxX), y: prev.y }));
            break;
          default:
            break;
        }
      };
    
      document.addEventListener('keydown', handleKeyDown);
    
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          setSteps(prevSteps => prevSteps + 1);
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      findPokemon(steps, context)

  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [event]);
  
    const [charPosition, setCharPosition] = useState({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  
    const { x: charX, y: charY } = charPosition;

    return(
        !isLoading &&
        <>
            {dayTime === 'noite' && (
              <span className='night_mask' />
            )}
            <Modal isOpen={isModalOpen}/>
            <Header />
            <div id="mapa.container">
                <div id="mapa" className='mapa_bg2'></div>
                <div id="char"
                  style={{
                    left: `${charX}px`,
                    top: `${charY}px`,
                  }}
                ></div>
                <div class="head"></div>
              <TravelButton label={'Próxima Região'} url={'/mapa2'} />
            </div>
        </>
    )
}