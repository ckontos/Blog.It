// const person = {
//     name: 'Dimitri',
//     age: 26,
//     location: {
//         city: 'Charlotte',
//         temp: 88
//     }
// }

// object destructuring

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'self- published' } = book.publisher;
const { title, author} = book;
console.log(publisherName);
console.log(`${title} is written by ${author} and published by ${publisherName}`);

// Array destructuring

const item = ['coffee (hot)', '2.25', '2.50', '2.75'];

const [item_name, sm_price, med_price, lg_price] = item;

console.log(`A medium ${item_name} costs ${med_price}.`);

