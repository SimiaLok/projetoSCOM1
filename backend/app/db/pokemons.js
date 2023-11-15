// Aqui nesse código "pokemons" temos uma lista de objetos criada na mão com o nome, id, imagem e descrição

const { uuid } = require('uuidv4')

const PokemonModel = require('../models/PokemonModel');

module.exports = [
    new PokemonModel(
        uuid(),
        "Blastoise",
        "https://wallpapercave.com/wp/wp10077774.png",
        "Blastoise é um grande Pokémon tartaruga bípede . Seu corpo é azul e fica quase todo escondido por sua casca marrom e dura. Esta concha tem a parte inferior de cor creme e uma crista branca circundando seus braços e separando as metades superior e inferior. Dois poderosos canhões de água residem no topo de sua concha, sobre seus ombros. Esses canhões podem ser estendidos ou retirados. A cabeça de Blastoise tem orelhas triangulares pretas por dentro, pequenos olhos castanhos e mandíbula inferior de cor creme. Seus braços são grossos e possui três garras em cada mão. Seus pés possuem três garras na frente e uma nas costas. Saindo do fundo de sua concha está uma cauda atarracada."
    ),
    new PokemonModel(
        uuid(),
        "Venusaur",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dab545d8-82e2-4a07-bc9d-750daeb485d5/d79vs2n-f42e001e-0228-4401-99e0-81745cdd5626.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhYjU0NWQ4LTgyZTItNGEwNy1iYzlkLTc1MGRhZWI0ODVkNVwvZDc5dnMybi1mNDJlMDAxZS0wMjI4LTQ0MDEtOTllMC04MTc0NWNkZDU2MjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qGOLoJzFT6fTB9AFsnMjVKaGxbt9c8Gl0Twe9ufGD4g",
        "Venusaur é um Pokémon anfíbio quadrúpede e atarracado com pele azul-esverdeada acidentada. Possui olhos pequenos e circulares vermelhos e focinho curto e rombudo. Sua boca é larga, com dois dentes pontiagudos na mandíbula superior e quatro na mandíbula inferior. No topo de sua cabeça há orelhas pequenas e pontudas com interior rosa avermelhado. Possui três dedos com garras em cada pé. O botão em suas costas floresceu em uma grande flor rosa com manchas brancas. A flor é sustentada por um tronco grosso e marrom rodeado por folhas verdes. Uma Venusaur fêmea tem uma semente no centro de sua flor."
    ),
    new PokemonModel(
        uuid(),
        "Charizard",
        "https://wallpapers.com/images/hd/charizard-pictures-hy7znwsnha8wvdwa.jpg",
        "Charizard é um Pokémon dracônico e bípede . É principalmente laranja com uma parte inferior creme do peito até a ponta da cauda. Possui pescoço longo, pequenos olhos azuis, narinas ligeiramente levantadas e duas estruturas semelhantes a chifres projetando-se na parte de trás de sua cabeça retangular. Existem duas presas visíveis na mandíbula superior quando a boca está fechada. Duas grandes asas com a parte inferior azul-esverdeada brotam de suas costas, e um apêndice em forma de chifre se projeta do topo da terceira articulação de cada asa. Um único dedo alar é visível através do centro de cada membrana da asa. Os braços de Charizard são curtos e magros em comparação com sua barriga robusta, e cada membro possui três garras brancas. Possui pernas atarracadas com solas de cor creme em cada um de seus plantígradospés. A ponta de sua cauda longa e afilada queima com uma chama considerável, que pode se intensificar para uma chama azul se Charizard estiver irritado."
    ),
    new PokemonModel(
        uuid(),
        "Pidgeot",
        "https://wallpapercave.com/wp/wp2398612.jpg",
        "Pidgeot é um Pokémon aviário com asas grandes, garras afiadas e bico curto e adunco. Sua plumagem brilhante é principalmente marrom com plumagem de cor creme e penas de voo. Sua cabeça possui uma crista decorada quase tão longa quanto seu corpo. As penas centrais de sua crista são amarelas, enquanto as penas externas são vermelhas. As penas em leque de sua cauda são vermelhas ou marrons. Seu bico e pernas são rosados, e há três dedos voltados para a frente e um dedo voltado para trás em cada pé. Atrás de cada olho há uma marca preta angular."
    ),
    new PokemonModel(
        uuid(),
        "Pikachu",
        "https://img.freepik.com/fotos-premium/pikachu-hd-8k-papel-de-parede-imagem-fotografica_915071-50831.jpg",
        "Pikachu é um Pokémon roedor baixo e gordinho . É coberto por pêlo amarelo com duas listras horizontais marrons no dorso. Possui boca pequena, orelhas longas e pontudas com pontas pretas e olhos castanhos. Cada bochecha é um círculo vermelho que contém uma bolsa para armazenamento de eletricidade. Possui antebraços curtos com cinco dedos em cada pata, e cada pé tem três dedos. Na base de sua cauda em forma de raio há uma mancha de pelo marrom. A fêmea terá um entalhe em forma de V no final da cauda, ​​que se parece com o topo de um coração. É classificado como quadrúpede, mas sabe-se que fica em pé e anda sobre as patas traseiras."
    ),
    new PokemonModel(
        uuid(),
        "Electabuzz",
        "https://wallpapercave.com/wp/wp2473002.jpg",
        "Electabuzz é um Pokémon ligeiramente humanóide com algumas características felinas . Possui antenas com pontas bulbosas onde deveriam estar as orelhas, dois longos tufos de pêlo no topo da cabeça, olhos pequenos e duas grandes presas na mandíbula superior. É coberto por pêlo amarelo com muitas listras pretas. Há uma grande faixa em forma de raio no peito de Electabuzz, uma faixa em forma de V na testa, uma faixa na lateral, uma faixa grossa nas costas, duas faixas em cada perna, várias faixas quebradas em cada braço e muitos anéis ao redor de sua longa cauda. Existem três dedos com garras em cada um dos pés, dois na frente e um atrás, e cinco dedos em cada mão."
    ),
    new PokemonModel(
        uuid(),
        "Arcanine",
        "https://images5.alphacoders.com/497/497664.png",
        "Arcanine é um Pokémon canino quadrúpede com pele laranja marcada por listras pretas irregulares. Possui orelhas em formato de diamante com interior bege, olhos pretos, nariz redondo e preto e dois dentes pontiagudos saindo da mandíbula superior. Sua cabeça, focinho e peito são cobertos por pêlo bege e desgrenhado, exceto por duas seções ovais ao redor de cada olho e orelha. Longos tufos de pêlo crescem atrás dos cotovelos e ao redor dos tornozelos. Sua parte inferior é preta e tem uma cauda bege ondulada e dobrada no meio. Cada pata tem três dedos e uma almofada redonda rosa."
    ),
    new PokemonModel(
        uuid(),
        "Alakazam",
        "https://i.pinimg.com/originals/c5/df/1c/c5df1c99c740925a50ccff58067114f3.jpg",
        "Alakazam é ​​um Pokémon ligeiramente humanóide com um grande bigode. Uma mulher Alakazam tem um bigode significativamente mais curto do que um homem. Tem um focinho longo e fino, olhos estreitos, pontas semelhantes a orelhas que se estendem do topo da cabeça e uma ponta adicional saindo de cada bochecha. Cobrindo seu corpo esquelético amarelo estão seções marrons semelhantes a uma armadura sobre seu peito, ombros, antebraços e joelhos. Existem três dedos em cada pé, cada um com uma garra branca. Dois dos dedos estão voltados para a frente, enquanto um está voltado para trás. Ele empunha uma colher de prata em cada mão, que funciona como amplificador de suas habilidades psíquicas. As colheres são criadas usando seus poderes psíquicos e ele pode dá-las a alguém em quem confia."
    ),
    new PokemonModel(
        uuid(),
        "Gengar",
        "https://d.furaffinity.net/art/ickyskunk/1469748333/1469748303.ickyskunk_gengar_copy.jpg",
        "Gengar é um Pokémon bípede roxo escuro com um corpo arredondado. Tem olhos vermelhos, uma boca larga que geralmente se curva em um sorriso sinistro e orelhas pontudas. Em suas costas há numerosos espinhos e espinhos menores no topo da cabeça, semelhantes a pêlos tufados. Seus braços e pernas são curtos, com três dedos nas mãos e nos pés. Ele também tem uma cauda atarracada."
    ),
    new PokemonModel(
        uuid(),
        "Syther",
        "https://ovicio.com.br/wp-content/uploads/2021/02/20210219-goh_scyther.png",
        "Scyther é um Pokémon bípede e insetóide . Seu corpo é principalmente verde e tem uma seção fina de cor creme entre a cabeça, o tórax e o abdômen. As fêmeas Scyther têm abdômen maiores que os machos Scyther. Sua cabeça reptiliana tem dois olhos estreitos e triangulares e três chifres rombos que se estendem desde a testa. Seus braços terminam em grandes foices brancas, que utiliza tanto para caça quanto para luta. Dois pares de asas de cor creme se estendem de suas costas. Embora essas asas permitam que Scyther voe, isso raramente acontece. As coxas de Scyther têm pontas grandes apontando para cima. Seus pés são altos, arredondados e cônicos, quase se estendendo até as coxas; cada pé termina em três pequenas garras brancas na parte frontal."
    ),
    new PokemonModel(
        uuid(),
        "Magmar",
        "https://i.pinimg.com/originals/cb/d3/1d/cbd31d1cd927fc63fa04268b1180a0e7.jpg",
        "Magmar é um Pokémon bípede que possui um corpo vermelho com desenhos de chamas amarelas na metade inferior. Tem um bico castanho enrugado, olhos pequenos e dois caroços na testa com uma chama amarela no topo de cada um. Escamas vermelhas e rígidas cobrem seus braços e ele tem cinco dedos com garras em cada mão. Os ombros e coxas de Magmar são amarelos, e seus pés vermelhos têm dois dedos com garras cada. Possui algemas de metal pretas em volta do pescoço e tornozelos. Nas costas há uma fileira de pontas vermelhas e há uma chama na ponta de sua cauda amarela e afilada."
    ),
    new PokemonModel(
        uuid(),
        "Gyarados",
        "https://pbs.twimg.com/media/FJ4dbtAWQAIgmxz.jpg:large",
        "Gyarados é um Pokémon piscino e dracônico com um longo corpo serpentino coberto por escamas ligeiramente sobrepostas. É principalmente azul com barriga amarela e tem uma fileira de manchas amarelas em cada lado. Sua boca é muito grande e aberta, com quatro dentes pontiagudos e lábios amarelos. Possui um par de barbilhões e uma pequena barbatana branca em cada lado da face. Os barbilhões são brancos na fêmea e azuis no macho. Possui olhos pequenos e vermelhos, uma crista azul escura de três pontas na cabeça e quatro nadadeiras dorsais brancas e pontiagudas . A barbatana caudal do Gyarados é semelhante em estrutura à crista da cabeça, exceto por uma barbatana fina e branca espalhada entre as pontas."
    ),
    new PokemonModel(
        uuid(),
        "Lapras",
        "https://w0.peakpx.com/wallpaper/735/422/HD-wallpaper-lapras-pokemon-water-cute-anime.jpg",
        "Lapras é um Pokémon reptiliano marinho que se assemelha a um plesiossauro . Possui pele azul com manchas azuis mais escuras e parte inferior de cor creme. Possui grandes olhos castanhos, um chifre curto na testa e orelhas bem curvadas. Possui pescoço longo e quatro nadadeiras. As nadadeiras anteriores são maiores que as posteriores. Em suas costas há uma concha pesada e cinza coberta por protuberâncias rombas."
    ),
    new PokemonModel(
        uuid(),
        "Aerodactyl",
        "https://wallpapers.com/images/featured/aerodactyl-qxtyzjruyplgr3bd.jpg",
        "Aerodactyl é um Pokémon pré-histórico reptiliano e bípede que se assemelha a um pterossauro com diversas características dracônicas. Tem orelhas pequenas e pontiagudas, olhos estreitos verde-escuros, focinho estriado, boca aberta e mandíbula inferior forte cheia de presas serrilhadas. Seu corpo é coberto por uma pele azul-acinzentada clara e possui grandes asas membranosas violetas. As mãos com garras no final de cada asa permitem agarrar objetos. Possui uma crista em forma de protuberância com uma ponta nas costas e uma cauda forte com ponta em forma de flecha. Seus pés em forma de garra têm dois dedos na frente e um atrás, e são capazes de agarrar e agarrar firmemente sua presa durante o vôo."
    ),
    new PokemonModel(
        uuid(),
        "Snorlax",
        "https://images6.alphacoders.com/109/1094097.png",
        "Snorlax é um enorme Pokémon mamífero bípede, verde-azulado escuro, com rosto, barriga e pés de cor creme. Seu corpo é composto principalmente pela barriga, já que seus membros são comparativamente pequenos. Sua cabeça é grande, com orelhas pequenas e pontudas e dois dentes pontiagudos saindo da mandíbula inferior. Possui pés redondos, ambos com três garras e uma almofada circular marrom, e braços curtos com cinco garras em cada mão. O bulk de Snorlax faz dele o tipo Normal mais pesado ."
    ),
    new PokemonModel(
        uuid(),
        "Articuno",
        "https://e0.pxfuel.com/wallpapers/486/20/desktop-wallpaper-articuno-anime-pokemon-pokemon-articuno.jpg",
        "Articuno é um grande Pokémon aviário com plumagem predominantemente azul celeste e asas consideradas feitas de gelo. Em sua testa há uma crista que consiste em três penas azuis mais escuras em forma de losango. Possui olhos vermelhos circulares, bico curto e cinza e pernas longas e finas. Cada pé tem três dedos voltados para a frente e um voltado para trás. Em seu peito há uma massa de penas felpudas de um azul claro. Sua longa cauda em forma de serpentina é mais longa que o corpo e tem o mesmo tom de azul da crista."
    ),
    new PokemonModel(
        uuid(),
        "Zapdos",
        "https://i.pinimg.com/originals/a2/43/27/a2432761ab96bd80a7b8f1f42b228532.jpg",
        "Zapdos é um grande Pokémon aviário com plumagem predominantemente amarela. Possui olhos pequenos e triangulares com preto ao redor e um bico longo, fino e laranja claro. Suas asas e cauda são uma massa de penas pontiagudas e há penas pretas cobrindo a parte de trás de suas asas e as penas internas da cauda. Uma grande crista de penas pontiagudas envolve sua cabeça. Suas coxas são bronzeadas e suas pernas finas e laranja-claras. Possui pés com três dedos voltados para a frente e um voltado para trás; cada dedo do pé tem uma garra curta."
    ),
    new PokemonModel(
        uuid(),
        "Moltres",
        "https://static.zerochan.net/Moltres.full.4017019.jpg",
        "Moltres é um grande Pokémon aviário com plumagem dourada. Possui uma crista longa e esvoaçante e uma cauda ondulada, ambas feitas de chamas laranja-avermelhadas e amarelas. Além disso, suas asas também estão envoltas em plumagem de fogo. Possui pescoço longo e fino, bico pontudo marrom e olhos pequenos e triangulares. Suas pernas finas e marrons têm pés com três dedos voltados para a frente e um voltado para trás. Possui garras curtas."
    ),
    new PokemonModel(
        uuid(),
        "Dragonite",
        "https://s1.zerochan.net/Dragonite.600.3674236.jpg",
        "Dragonite é um Pokémon reptiliano dracônico e bípede com pele laranja clara. Possui olhos grandes, verde-acinzentados e focinho redondo com narinas pequenas. Um par de antenas longas e finas brota do topo de sua cabeça com um pequeno chifre colocado entre elas. Sua barriga estriada é de cor creme e se estende do pescoço até a ponta de sua cauda longa e afilada. Possui braços e pernas grossos terminando em três garras cada. As articulações das pernas são bem definidas, enquanto os braços têm aparência lisa e arredondada. As asas de Dragonite são pequenas em relação ao seu corpo, com membranas de asas azul-petróleo."
    ),
    new PokemonModel(
        uuid(),
        "Mew",
        "https://steamuserimages-a.akamaihd.net/ugc/968745941730700108/1FC1126C815B1C8F4F4F37B3741659D1A9DC5200/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        "Mew é um Pokémon bípede rosa com características de mamífero . Possui focinho arredondado e largo; orelhas triangulares; e grandes olhos azuis. Possui braços curtos com patas de três dedos e patas traseiras grandes com marcas ovais nas solas. Sua cauda é longa e fina com ponta ovóide. Seu pelo é tão fino e fino que só pode ser visto ao microscópio. Diz-se que Mew possui o DNA de cada Pokémon contido em seu corpo, permitindo que Mew aprenda e use qualquer ataque."
    ),
    new PokemonModel(
        uuid(),
        "Mewtwo",
        "https://i.pinimg.com/originals/da/6c/e0/da6ce0c1fb5eb21832555f926f18c1d9.png",
        "Mewtwo é um Pokémon artificial . É um Pokémon humanóide bípede com algumas características felinas. É principalmente cinza com uma cauda longa e roxa. No topo de sua cabeça há dois chifres curtos e rombos e olhos roxos. Um tubo se estende da parte de trás do crânio até o topo da coluna, contornando o pescoço. Possui peito e ombros definidos, que lembram um peitoral. Os três dígitos de cada mão e pé têm pontas esféricas. Sua cauda é grossa na base, mas afina antes de terminar em um pequeno bulbo."
    ),
]