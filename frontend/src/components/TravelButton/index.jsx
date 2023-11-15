// Importa o código de estilo css
// Define uma função "travelbutton" com duas propriedades label e url
// Dentro das funções temos uma condição que verifica se o tamanho dos dados recuperados é menor que 6
// Se não cumprir a condição emite um alerta e retorna não prosseguindo com a função
// Com a consigão cumprida redireciona o usuário para a url fornecida (próxima região)

import styles from './styles.scss'

export function TravelButton({label, url}){
    function handleSubmit(){
        const storedData = JSON.parse(localStorage.getItem('userValues'))

        if(storedData.length < 6){
            alert('Você precisa ter 3 pokémons para avançar')
            return
        }

        window.location.href = url
    }

    return(
        <button className="travel_button" onClick={() => handleSubmit()}>
            {label}
        </button>
    )
}