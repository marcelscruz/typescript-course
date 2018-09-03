type Bank = { money: number; deposit: (val: number) => void }

let bankAccout: Bank = {
  money: 2000,
  deposit(value: number): void {
    this.money += value
  },
}

let myself: { name: string; bankAccout: Bank; hobbies: string[] } = {
  name: 'Marcel',
  bankAccout: bankAccout,
  hobbies: ['Sports', 'Cooking'],
}

myself.bankAccout.deposit(3000)

console.log(myself)
