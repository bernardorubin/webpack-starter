import { person, sayHello } from './lib';

console.log(person.name);

console.log(sayHello('Bern'));

// async functions return a promise automatically
async function getPosts() {
  // fetch returns data as a promise
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts))