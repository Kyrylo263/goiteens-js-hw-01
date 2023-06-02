const age = 13;
console.log(age);

const Name = 'Kyrylo';
console.log(Name);

const isStudent = true;
console.log(isStudent);

const myString = 'Неосмислене життя не варте того, щоб його прожити.';
console.log(myString);

let myNumber = 11;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const userName = prompt('Введіть ваше ім*я');
console.log('Привіт', userName);

const confirmSome = confirm('Підтверджуєте дію?');
if (confirmSome) {
    console.log('Дякуємо за підтвердження!');
} else {
    console.log('Дію відмінено!');
}

alert('Небезпечна дія');
const dangerConfirm = confirm("Підтверджуєте дію?");
if (dangerConfirm) {
    alert('Дякуємо за підтвердження!');
} else {
    alert('Дію відмінено!');
}