// Importa a API e o Context 
// Define a função assíncrona findPokemon que aceita steps e context como argumentos.
// findPokemon é uma função que "encontra" um Pokémon aleatório sempre que steps é um múltiplo de 100. 
// Ela faz uma requisição para obter dados sobre todos os Pokémons e seleciona um Pokémon aleatoriamente.
//Por fim, atualiza o estado do modal com os dados do Pokémon selecionado e abre o modal.

import { api } from "./api";
import { Context } from "../context/pokeContext";

export async function findPokemon(steps, context) {
    const { setModalName, setIsModalOpen, setModalImage } = context;

    if (steps % 100 === 0 && steps !== 0) {
        try {
            const pokemons = await api.get('/pokemons')
                .then(({ data }) => {
                    return data;
                });

            const randomIndex = Math.floor(Math.random() * pokemons.length);

            setModalName(pokemons[randomIndex].name);
            setModalImage(pokemons[randomIndex].image);
            setIsModalOpen(true);
        } catch (err) {
            console.log(err);
        }
    }
}
