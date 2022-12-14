'use strict';

/////////////////////////////////////////////////
// /* Working With Arrays
// Coding Challenge #1 */

// /* ยง Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// ยง Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] */

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
//     is an adult, and is ${age} years old ๐โ๐ฆบ`
//         : `Dog number ${i + 1} is still a puppy ๐ถ`;
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
//     is an adult, and is ${dog} years old ๐โ๐ฆบ`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy ๐ถ`);
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

// console.log(deposits); //zwraca (5)ย?[200, 450, 3000, 70, 1300]

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
from other challenges how we calculate averages ๏ฟฝ)
4. Run the function for both test datasets
Test data:
ยง Data 1: [5, 2, 4, 1, 15, 8, 3]
ยง Data 2: [16, 6, 10, 5, 6, 1, 4] */

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
ยง Data 1: [5, 2, 4, 1, 15, 8, 3]
ยง Data 2: [16, 6, 10, 5, 6, 1, 4]
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
// // odwrรณcono
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

// New methods

// // Empty arrays+fill()
// const x = new Array(7);
// console.log(x);
// // x.fill(1); //[1,1,1,1,1,1,1]
// // console.log(x);

// x.fill(1, 3, 5);
// console.log(x); //[puste,puste, puste, 1, 1, puste, puste]

// // not empty array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// // Creating array programmatically

// const y = Array.from({ length: 7 }, () => 1);
// // [1,1,1,1,1,1,1]
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const hundred = Array.from({ length: 100 }, () =>
//   Math.floor(Math.random() * 6)
// );
// console.log(hundred);

// labelBalance.addEventListener('click', () => {
//   const movementFromUI = Array.from(
//     document.querySelectorAll('.movements__value'), //tutaj metoda map nie zadziaลa
//     el => Number(el.textContent.replace('โฌ', ''))
//     // piszemy natomiast jako drugi parametr
//   );

//   // console.log(movementFromUI.map(el => el.textContent.replace('โฌ', '')));//zadziaลa tutaj
//   console.log(movementFromUI);

//   // Spread operator
//   const movementFromUI2 = [
//     ...document.querySelectorAll('.movements__value'),
//   ].map(el => Number(el.textContent.replace('โฌ', '')));

//   console.log(movementFromUI2);
// });

///////////////////////
// Array methods practice
// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.

// // first way:
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// // second way(reduce method):
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // 3.
// // The reduce method for everything

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log({ deposits, withdrawals });

// // 4.
// // example:
// // this is a nice title -> This Is a Nice Title

// const convertTitleText = title => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };
// console.log(convertTitleText('this is a nice title'));
// console.log(convertTitleText('this is a LONG title but not too long'));
// console.log(convertTitleText('and here is anoter title with EXAMPLE'));

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
      <div class="movements__value">${mov}โฌ</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcAndDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}โฌ`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}โฌ`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}โฌ`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}โฌ`;
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

// /////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 4

/* Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint). */
////////////////////////

/* Hints:
ยง Use many different tools to solve these challenges, you can use the summary
lecture to choose between them ๏ฟฝ
ยง Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion. */

//////////////
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/* 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg) */

/* 
//My solution:

dogs.forEach(dog => {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
}); */

// Teacher's solution:

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);
/* 2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) ๏ฟฝ */

/*
//My solution:

 const checkingPortion = dog => {
  // console.log(dog);
  if (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  ) {
    console.log(dog);
    console.log(`${dog.owners.join("'s, and ")}'s dog eating normal`);
  } else if (dog.curFood < dog.recommendedFood * 0.9) {
    console.log(`${dog.owners.join("'s, and ")}'s dog eating too litle`);
  } else {
    console.log(`${dog.owners.join("'s, and ")}'s dog eating too much`);
  }
  }
  // //2.
  // dogs.forEach(dog => {
  //   checkingPortion(dog);
  // });
  
  // const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
; 

// checkingPortion(sarahDog);
// current > recommended * 0.9 && current < recommended * 1.1;

*/

// Teacher's solution

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);

console.log(
  `Sarah's dog is eating too  ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

/* 3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle') */

/* 

// My solution:

let ownersEatTooLittle = dogs
  .filter(dog => {
    return dog.curFood < dog.recommendedFood * 0.9;
  })
  .flatMap(owner => owner.owners);

let ownersEatTooMuch = dogs
  .filter(dog => {
    return dog.curFood > dog.recommendedFood * 1.1;
  })
  .flatMap(owner => owner.owners);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle); */

// Teacher's solution

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log('///////////////////////////////');

/* 4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!" */

/* 

// My solution:

console.log(`${ownersEatTooLittle.join("'s and ")}'s dogs eat too litle`);
console.log(`${ownersEatTooMuch.join("'s and ")}'s dogs eat too much`);
 */
// Teacher's solution

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

console.log('///////////////////////////////');
/* 5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false) */
/* 
// My solution:

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
 */

// Teacher's solution

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

console.log('///////////////////////////////');

/* 6. Log to the console whether there is any dog eating an okay amount of food
(just true or false) */
/*
// My solution:

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
); */

// Teacher's solution:

const checkEatingOk = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOk));

console.log('///////////////////////////////');

/* 7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.) */
/* 

// My solution:


const dogsEtingOk = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(dogsEtingOk); */

// Teacher's solution:

console.log(dogs.filter(checkEatingOk));
console.log('///////////////////////////////');
/* 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects ๏ฟฝ) */
/* 

// My solution:


const dogsSort = dogs
  .map(dog => dog)
  .sort((a, b) => {
    if (a.recommendedFood > b.recommendedFood) {
      return 1;
    }
    if (a.recommendedFood < b.recommendedFood) {
      return -1;
    }
  });
console.log(dogsSort); */

// Teacher's solution

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
