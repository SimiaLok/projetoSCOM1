// Importa createContext, useEffect e useState do React.
// Na função exportada temos a função PokeProvider que armazena variáveis de estado relevantes para a aplicação
// Exemplos: se o modal esta aberto, o nome e a imagem do pokemon no modal, a hora atual e o periodo (dia ou noite)

import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function PokeProvider({children}){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalName, setModalName] = useState('')
    const [modalImage, setModalImage] = useState('')
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [dayTime, setDayTime] = useState('')

    useEffect(() => {
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();

        setMinutes(minute)
        setHours(hour)
    }, [])

    return (
        <Context.Provider value={{ dayTime, setDayTime, minutes, setMinutes, hours, setHours, isModalOpen, setIsModalOpen, modalName, setModalName, modalImage, setModalImage }}>
            {children}
        </Context.Provider>
    )
}