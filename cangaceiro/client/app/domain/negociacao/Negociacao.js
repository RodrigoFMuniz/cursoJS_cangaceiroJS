class Negociacao{
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor
        Object.freeze(this)
    }
    get volume(){
        return this._valor * this._quantidade
    }

    get valor(){
        return this._valor
    }
    get quantidade(){
        return this._quantidade
    }
    get data(){
        // return this._data
        return new Date(this._data.getTime())
    }
}

// const n1 = new Negociacao(new Date(), 23, 40)
// Object.freeze(n1)
// console.log(n1.valor)
// console.log(n1.data)
// console.log(n1.quantidade)
// n1.quantidade = 2000
// console.log(n1.quantidade)
// n1._quantidade = 2000
// console.log(n1.quantidade)
// console.log(n1.volume)
// console.log(Object.isFrozen(n1))
// console.log(n1.data.getTime())

// const outroDia = new Date()
// outroDia.setDate(11)
// n1.data = outroDia
// console.log(n1.data)
// n1.data.setDate(11)
// console.log(n1.data)

// const hoje = new Date()
// const n2 = new Negociacao(hoje, 20, 30)
// console.log(n2.data)
// hoje.setDate(11)
// console.log(n2.data)

// Object.assign()

// const origem1 = {nome: 'Cangaceiro'}
// const origem2 = {idade: 30}

// const copia = Object.assign({}, origem1, origem2)

// console.log(copia)

// const perfil = 'Rodrigo'

// const objeto= {perfil}

// console.log(objeto)

// class Negociacao2 {
//     constructor(_data, _quantidade, _valor){
//         Object.assign(this,{_quantidade, _valor})
//         this._data = new Date(_data.getTime()),
//         Object.freeze(this)
//     }
// }

// const n3 = new Negociacao2(new Date(), 40, 32)
// console.log(n3)

