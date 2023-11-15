// Essa página é uma cópia da Home alterando apenas a imagem do mapa e o botão que redireciona o usuário para a home

import { useContext, useEffect, useState } from 'react'
import './styles.scss'

import { charmove } from '../../functions/charmove'
import { verifyToken } from '../../functions/verifyToken'
import { Header } from '../../components/Header'
import { findPokemon } from '../../functions/findPokemon'
import { Modal } from '../../components/Modal'
import { Context } from '../../context/pokeContext'
import { TravelButton } from '../../components/TravelButton'

export function Region2(){
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
        const speed = 10; 

        switch (e.key) {
          case 'ArrowUp':
            setCharPosition((prev) => ({ x: prev.x, y: prev.y - speed }));
            break;
          case 'ArrowDown':
            setCharPosition((prev) => ({ x: prev.x, y: prev.y + speed }));
            break;
          case 'ArrowLeft':
            setCharPosition((prev) => ({ x: prev.x - speed, y: prev.y }));
            break;
          case 'ArrowRight':
            setCharPosition((prev) => ({ x: prev.x + speed, y: prev.y }));
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
                <div id="mapa2"></div>
                <div id="char"
                  style={{
                    left: `${charX}px`,
                    top: `${charY}px`,
                  }}
                ></div>
                <div class="head"></div>
              <TravelButton label={'Primeira Região'} url={'/mapa'} />
            </div>
        </>
    )
}