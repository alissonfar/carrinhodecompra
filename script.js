let nomeUsuario = window.document.getElementById('input-nome-usuario')

let nomeProduto = window.document.getElementById('input-nome-produto')

let valorProduto = window.document.getElementById('input-valor-produto')


let usuarios = []

class Itens {
    constructor(nome, valor) {
      this.nome = nome
      this.valor = valor
    }
  
    novoItem(itemNome, itemValor) {
      return new Itens(itemNome, itemValor)
    }
  }
  
  class Carrinho {
    constructor() {
      this.itens = [];
      this.quantidadeTotal = 0;
      this.valorTotal = 0;
    }
  
    adicionarItem(nomeItem, valorItem){
      let novoItem = new Itens(nomeItem, valorItem)
      this.itens.push(novoItem);
      this.quantidadeTotal = this.itens.length;
  
      this.atualizarTotal();
    }
  
    atualizarTotal() {
      this.valorTotal = this.itens.reduce((acumulador, itemAtual) => itemAtual.valor + acumulador, 0)
    }
  }
  
  class Usuario extends Carrinho {
    constructor(nomeUsuario) {
      super();
      this.nomeUsuario = nomeUsuario;
    }
  }
  

  function criarUsuario() {
    let nomeUsuarioValue = document.getElementById('input-nome-usuario').value;

    let novoUsuario = new Usuario(nomeUsuarioValue)
    usuarios.push(novoUsuario)
  }



  function adicionarItemAoCarrinho(){
    if(usuarios.length > 0) {
    let ultimoUsuario = usuarios[usuarios.length - 1]
    let valorProdutoValue = window.document.getElementById('input-valor-produto').value
    let nomeProdutoValue = window.document.getElementById('input-nome-produto').value
    novoItem = {nome: nomeProdutoValue, valor: valorProdutoValue}
      
    ultimoUsuario.adicionarItem(novoItem.nome, novoItem.valor)

    console.log(ultimoUsuario)
    

      
    } else {
      window.alert('Crie um usuário primeiro.')
    }

  }

