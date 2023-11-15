// Importação de alguns modulos como o Context e o estilo em css
//Este componente Watch é usado para exibir um relógio que atualiza a cada segundo 
// Além disso, determina se é 'dia' ou 'noite' com base na hora atual (dia: 5h - 19h & noite: 19h - 5h). 
// A hora e o tempo do dia são armazenados no Context para que possam ser acessados por outros componentes.

import { useContext, useEffect } from "react"
import styles from './styles.scss'
import {Context} from '../../context/pokeContext'

export function Watch() {
    const { setDayTime, minutes, setMinutes, hours, setHours } = useContext(Context)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setMinutes((prevMinutes) => (prevMinutes + 1) % 60);
  
        if (minutes === 59) {
            if(hours === 23){
                setHours(0)
            } else {
                setHours((prevHours) => (prevHours + 1) % 60);
            }
        }
  
        if (hours >= 5 && hours < 19) {
            setDayTime('dia')
        } else {
            setDayTime('noite')
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [minutes, hours]);
  
    return (
      <p id="watch">
        {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes}
      </p>
    );
  }