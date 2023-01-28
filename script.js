'use strict';

//1.

const user = {
  name: 'name',
  age: 30,
  id: 'id',
};
Object.defineProperty(user, 'name', {
  writable: false,
});
Object.defineProperty(user, 'age', {
  writable: false,
});
Object.defineProperty(user, 'id', {
  writable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'age'));
console.log(Object.getOwnPropertyDescriptor(user, 'id'));

//2.

const dataBase = {
  dbName: 'user',
  dbType: 'MySQL',
};

const configurateDB = {
  token: '123',
  password: '567',
  user: 'admin',
};

Object.preventExtensions(dataBase);
console.log(Object.isExtensible(dataBase));
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB));

//3.

const salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};
Object.defineProperty(salaries, 'sum', {
  get() {
    let sum = 0;
    for (salary in this) {
      sum += this[salary];
    }
    console.log(sum);
  },
  enumerable: false,
});

Object.defineProperty(salaries, 'addSalaries', {
  set(arr) {
    arr.forEach((element) => {
      let pair = element.split(': ');
      if (pair[0] in this) {
        this[pair[0]] = pair[1];
        return;
      }
      Object.defineProperty(this, pair[0], {
        value: pair[1],
      });
    });
  },
});

salaries.addSalaries = [
  'frontend: 2500',
  'backend: 1750',
  'design: 1300',
  'manager: 800',
];
console.log(salaries);

//4.

const User = {
  name: 'Mike',
  surname: 'Davis',
  age: 25,
};

Object.defineProperty(User, 'userInfo', {
  get() {
    let info = '';
    for (const i in this) {
      info += `${i}: ${this[i]}, `;
    }
    console.log(info);
  },
});

User.userInfo;
User.login = 'MK_18';
User.userInfo;
