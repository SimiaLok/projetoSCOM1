// A função charmove permite que um usuário controle a posição ddo char em um mapa usando as setas do teclado.

export function charmove(){
    const mapaContainer = document.getElementById('mapa.container');
    const mapa = document.getElementById('mapa');
    const char = document.getElementById('char');
    const mapWidth = mapa.clientWidth;
    const mapHeight = mapa.clientHeight;

    // Inicializar a posição do personagem no centro do mapa
    let charX = mapWidth / 2;
    let charY = mapHeight / 2;

    // Adicionar um evento de tecla para controlar o personagem
    document.addEventListener('keydown', (e) => {
        const speed = 10; // Ajuste a velocidade do personagem conforme necessário

        switch (e.key) {
            case 'ArrowUp':
                charY -= speed;
                break;
            case 'ArrowDown':
                charY += speed;
                break;
            case 'ArrowLeft':
                charX -= speed;
                break;
            case 'ArrowRight':
                charX += speed;
                break;
        }

        // Limitar a posição do personagem dentro dos limites do mapa
        charX = Math.min(Math.max(charX, 20), mapWidth -20);
        charY = Math.min(Math.max(charY, 100), mapHeight);

        // Atualizar a posição do personagem
        char.style.left = charX + 'px';
        char.style.top = charY + 'px';

        // Mover o mapa com base na posição do personagem
        const mapaX = (charX / mapWidth) * 100;
        const mapaY = (charY / mapHeight) * 100;
        mapa.style.backgroundPosition = `${mapaX}% ${mapaY}%`;
    });
}