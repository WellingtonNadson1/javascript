// Expense Control System
let account = {
    receita : [],
    despesa : []
}

function receitas(value = 0){
    account.receita.push(value)
    let totalReceita = account.receita.reduce((total, el) => total + el)
    return totalReceita
}

function despesas(value = 0){
    account.despesa.push(value)
    let totalDespesa = account.despesa.reduce((total, el) => total + el)
    return totalDespesa
}

function saldo(fn1, fn2){
    fn1 = receitas()
    fn2 = despesas()

    let saldoTotal = fn1 - fn2

    let result = saldoTotal === 0 ? `Seu Saldo Está ZERADO!!` : saldoTotal > 0 ? `Você possui: \n R$${fn1} de receitas \n-R$${fn2} de despesas \nSaldo POSITIVO de R$${saldoTotal}` : `Você possui: \n R$${fn1} de receitas \n-R$${fn2} de despesas \nSaldo NEGATIVO de R$${saldoTotal}`

    return result
}

receitas(60)
receitas(60)
receitas(60)
receitas(60)
receitas(60)
receitas(60)

despesas(60)
despesas(60)
despesas(60)
despesas(60)
despesas(60)




console.log(saldo())