"use strict";
var bankAccout = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
};
var myself = {
    name: 'Marcel',
    bankAccout: bankAccout,
    hobbies: ['Sports', 'Cooking'],
};
myself.bankAccout.deposit(3000);
console.log(myself);
