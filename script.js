const amount = document.getElementById('amount')
const withDrawButton = document.getElementById('withdraw')
const depositButton = document.getElementById('deposit')
const money = document.getElementById('money')

class Bank{
    constructor(){
        this.bankBalance = 0
    }
    withdraw(amount){
        if( amount > this.bankBalance){
            alert('You have insufficient amount of Balance!!!')
            return this.bankBalance
        }
        this.bankBalance = this.bankBalance - amount
        return this.bankBalance
    }
    deposit(amount){
        this.bankBalance += amount
        return this.bankBalance
    }
}

const bankAccount = new Bank()

withDrawButton.onclick = () =>{
    bankAccount.withdraw(Number(amount.value))
    money.innerText = bankAccount.bankBalance.toFixed(2)
}

depositButton.onclick = () =>{
    bankAccount.deposit(Number(amount.value))
    money.innerText = bankAccount.bankBalance.toFixed(2)
}