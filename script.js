'use strict';
// /* Working With Arrays
// Coding Challenge #1 */

// /* § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] */

// // MY SOLUTION

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// // const dogsJulia = [9, 16, 6, 8, 3];
// // const dogsKate = [10, 5, 6, 1, 4];

// const dogsJuliaCorrect = dogsJulia.slice(1, -2);

// const bothData = [...dogsJuliaCorrect, ...dogsKate];

// const checkDogs = arr => {
//   arr.forEach((age, i) => {
//     const result =
//       age >= 3
//         ? `Dog number ${i + 1}
//     is an adult, and is ${age} years old 🐕‍🦺`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(result);
//   });
// };
// checkDogs(bothData);
// // checkDogs(dogsKate);

// // TEACHER'S SOLUTION

// const checkDogs2 = function (dogsJulia2, dogsKate2) {
//   const dogsJuliaCorrected = dogsJulia2.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1}
//     is an adult, and is ${dog} years old 🐕‍🦺`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// the MAP method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements, movementsUsd);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// const createUserNames = accs => {
//   accs.forEach(acc => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUserNames(accounts);

// console.log(accounts);

// // console.log(createUserNames('Steven Thomas Williams'));
// // accounts.forEach(account => createUserNames(account.owner));

// // const user = 'Steven Thomas Williams'; //stw - username

// // the FILTER METHOD
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);

// console.log(deposits); //zwraca (5) [200, 450, 3000, 70, 1300]

// // to samo z for of
// // const depositsFor = [];
// // for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// // console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// THE REDUCE METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator -> SNOWBALL
// // const balance = movements.reduce((acc, cur, i, arr) => {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(balance);

// // to samo z FOR OF

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
//   console.log(balance2);
// }

// MAXIMUM VALUE OF ARRAY

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const greaterMov = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(greaterMov);

// Coding Challenge #2
/* Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

// My solution
// const calcAverageHumanAge = ages => {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(humanAge => humanAge >= 18);
//   console.log(adults);
//   const average = adults.reduce(
//     (acc, humAge, i, arr) => acc + humAge / arr.length,
//     0
//   );

//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log('//////////////////////');
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = movements => {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
       ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcAndDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance}€`;
};
calcAndDisplayBalance(account1.movements);

const calcDisplaySummary = movements => {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(dep => (dep * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUserNames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
/////////////////////////////////////////////////

// Chaining method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// PIPELINE
// const totaldepositsUSD = movements
//   .filter((mov, i, arr) => {
//     console.log(arr);
//     return mov > 0;
//   })
//   // .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov);

// console.log(totaldepositsUSD);
