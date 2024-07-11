let nomeUsuario = window.document.getElementById('input-nome-usuario')

let nomeProduto = window.document.getElementById('input-nome-produto')

let valorProduto = window.document.getElementById('input-valor-produto')
let valorProdutoValue = valorProduto.value



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
    let nomeUsuarioValue = nomeUsuario.value

    let usuario = new Usuario(nomeUsuarioValue)

    console.log(usuario)
    
  }

  function adicionarItem(){
    let nomeProdutoValue = nomeProduto.value

    usuario.nomeItem = nomeProdutoValue


  }