'use strict';

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////

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

/////////////////////////////////////////////////

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

/////////////////////////////////////////////////

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

/////////////////////////////////////////////////

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

/////////////////////////////////////////////////

/* Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, humAge, i, arr) => acc + humAge / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log('//////////////////////');
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////////////////////////////////////////////

//The find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

/////////////////////////////////////////////////
// Some and every

// condition
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const anydeposits = movements.some(mov => mov > 0);

// const anydeposits2 = movements.some(mov => mov > 5000);

// console.log(anydeposits, anydeposits2);

/////////////////////////////////////////////////

// Every Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.every(mov => mov > 0));

// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback

// const deposit = mov => mov > 0;

// console.log('///////////////////////');
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const WITHDRAWAL = mov => mov < 0;

// console.log('///////////////////////');
// console.log(movements.some(WITHDRAWAL));
// console.log(movements.every(WITHDRAWAL));
// console.log(movements.filter(WITHDRAWAL));

/////////////////////////////////////////////////

// Flat and Flatmap methods

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[1, [2, 2, 2, 2], 3], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(2));

// using flat() method

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();

// console.log(allMovements);
// const overalBalance2 = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance2);

// // Chaining method

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance);

// // using flatMap() method

// const overalBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance3);

/////////////////////////////////////////////////

// Sorting Arrays

// Strings

// const owners = ['Jonas', 'Martha', 'Zach', 'Adam'];
// console.log(owners.sort());

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.sort());

// // return <0, A, B
// // return >0 , B, A

// // Ascendind
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

// console.log(movements);

// // Descending
// // odwrócono
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return -1;
// //   }
// //   if (b > a) {
// //     return 1;
// //   }
// // });

// // ta sama matematyka innym algorytmem
// movements.sort((a, b) => b - a);

// console.log(movements);

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

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  // implementing sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
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

const calcAndDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

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

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // display balance
  calcAndDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

let currentAccount;

const clearInputFields = () => {
  // Clear input fields
  labelWelcome.textContent = 'Log in to get started';
  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
  containerApp.style.opacity = '0';
};

btnLogin.addEventListener('click', e => {
  // prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    clearInputFields();
    console.log(currentAccount.owner);
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear input fields

    containerApp.style.opacity = '100';
    // Update UI
    updateUI(currentAccount);
  } else {
    // Clear input fields
    clearInputFields();
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    alert(
      `${currentAccount.owner}! Your loan request is bigger than you can get. Please try again with a smaller amount`
    );
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = '0';
    console.log(accounts);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// New methods

// Empty arrays+fill()
const x = new Array(7);
console.log(x);
// x.fill(1); //[1,1,1,1,1,1,1]
// console.log(x);

x.fill(1, 3, 5);
console.log(x); //[puste,puste, puste, 1, 1, puste, puste]

// not empty array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
// Creating array programmatically

const y = Array.from({ length: 7 }, () => 1);
// [1,1,1,1,1,1,1]
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const hundred = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6)
);
console.log(hundred);

labelBalance.addEventListener('click', () => {
  const movementFromUI = Array.from(
    document.querySelectorAll('.movements__value'), //tutaj metoda map nie zadziała
    el => Number(el.textContent.replace('€', ''))
    // piszemy natomiast jako drugi parametr
  );

  // console.log(movementFromUI.map(el => el.textContent.replace('€', '')));//zadziała tutaj
  console.log(movementFromUI);

  // Spread operator
  const movementFromUI2 = [
    ...document.querySelectorAll('.movements__value'),
  ].map(el => Number(el.textContent.replace('€', '')));

  console.log(movementFromUI2);
});
