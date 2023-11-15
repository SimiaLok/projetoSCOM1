//Este código define uma classe "PokemonModel" e exporta a classe para ser usada em outros arquivos do projeto.

class PokemonModel {
    constructor(id, name, image, description) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
    }
  }
  
  module.exports = PokemonModel;