// ------------- 1 Добавление в массив-------------- //
// const genres = ["Jazz", "Blues"];
// genres.push("Country","Rock",`qewqwe`,`Pocker`,`Jony`, `Last element`)

// console.log(genres[genres.length - 1])

// genres.unshift("Volvo", "Reggae");

// console.log(genres)

// ------------- 2 Распарсил числа и умножил-------------- //

// const values = `8px 11px`;
// const strArr = values.split(' ');
// console.log(strArr);

// const a = parseFloat(strArr[0]);
// const b = parseFloat(strArr[1]);
// const square = a * b;
// console.log(square)


// ------------ 3 Нумерованый список------------- //

// const fruits = ["Orange", "Tomato", "Apple", "Garlic"];

// for (let i = 0; i < fruits.length; i += 1){
//      console.log(`${i + 1}: ${fruits[i]}`)
// }


// fruits.forEach((value, index) => {
//     console.log(`${index + 1}: ${value}`)
// });



// ------------ 4 ------------- //

// const names = `Jacob,William,Solomon,Artemis`;
// const phones = `143423423,63434242,534264535,32623535`;
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1){
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`)
// }

// ------------ 5 Удаление первого и последнего элементов ------------- //

// const string = `Welcome to the future`;
// const strArr = string.split(' ');
// console.log(strArr);
// strArr.pop(); // удаляем последний элемент
// strArr.shift(); // удаляем первый элемент
// const result = strArr.join(' ')
// console.log(result);
// console.log(`"${result}"`)

// ------------ 6 Реверс текста------------- //

// const string = `Welcome to the future`;
// const strArr = string.split('');
// console.log(strArr); // ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 't', 'h', 'e', ' ', 'f', 'u', 't', 'u', 'r', 'e']
// const reversedArr = strArr.reverse();
// console.log(reversedArr);
// const result = strArr.join(' ')
// console.log(result); // `e r u t u f   e h t   o t   e m o c l e W`

// let result = '';
// for (let i = strArr.length - 1; i >= 0; i -= 1){
//     result += strArr[i];
// }

// console.log(result);

// console.log(string.split('').reverse().join(' ')); // цепочка команд Чэйнинг

// ------------ 7 Алфавитный порядок------------- //

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1){
//     for (let j = i + 1; j < langs.length; j += 1){
//         console.log(langs[i][0],langs[j][0])
//         if (langs[i][0] > langs[j][0] ) {
//             const tmp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = tmp;
//         }
//     }
   
// }

// console.log(langs)


// ------------ 8 Поиск элемента ------------- //

// const numbers = [12, 1, 94, 4, 23, 37];
// let min = numbers[0];
// let max = numbers[0]

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
//     if (number > max) {
//         max = number;
//     }
// }



// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < numbers[0])
//         min = numbers[i]
// }

// console.log(min);

// console.log(max);


// ----- 9 Реверс ---- //


// const string = `Welcome to the future`;

// let reverseWordArr = string.split(' ');
// console.log(reverseWordArr);
// let arr = ``;
// for (let i = 0; i < reverseWordArr.length; i += 1){
//     arr += reverseWordArr[i].split('').reverse()    ;
   
// }

//  console.log(arr);
 

// function reverseWords(str) {
//   let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// }

// console.log(reverseWords(string))


// const strArr = string.split(' '); //  Разбили на отдельные слова
// console.log(strArr); //  ['Welcome', 'to', 'the', 'future']
// const reversedArr = strArr.reverse(); // ['future', 'the', 'to', 'Welcome']
// const result = strArr.join(' ')
// console.log(reversedArr);
// console.log(result); // future the to Welcome
 
// -------- 10 --------- //

// const users = [
//     { name: `Boby`, phone: `380665236772` },
//     { name: `Molly`, phone: `380665436772` },
//     { name: `Stepan`, phone: `380666536772` },
//     { name: `Marley`, phone: `380665136772`}
// ]

// for (const user of users) {
//     console.log(`${user.name} - ${user.phone}`)
// }

 // ----------- 11 codewars -------------- //

// function transform(str) {
//     const symbols = {};
//     let result = str;

//     for (let i = 0; i < str.length; i += 1) {
//         const letter = str[i];
//         symbols[letter] = symbols[letter] ? symbols[letter] + 1 : 1;
//     }

//     const symbArr = Object.entries(symbols);

//     symbArr.forEach(([key, value]) => {
//         const newSymbol = value === 1 ? '(' : ')';
//         result = result.replaceAll(key, newSymbol);
//     });
//     return result;
// }
 
// console.log(transform(`din`));
// console.log(transform(`recede`));

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


// console.log(message)

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line


//    message = ordered < available ? `The order is accepted, our manager will contact you` : `The order is accepted, our manager will contact you`
 

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(2, 3));
// console.log(checkStorage(4, 3));


// function getShippingCost(country) {
//   let message;
  // Change code below this line
//   switch (country) {
//     case `China` :
//     message = `Shipping to ${country} will cost 100 credits`;
//     break;
  
//   case `Chile`:
//     message = `Shipping to ${country} will cost 250 credits`;
//      break;
  
//   case `Australia`:
//     message = `Shipping to ${country} will cost 170 credits`;
//      break;
  
//   case `Jamaica`:
//     message = `Shipping to ${country} will cost 120 credits`;
//      break;
  
//   default :
//   message = `Sorry, there is no delivery to your country`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"))


// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   return substring;
//   }

// console.log(getSubstring(`My Name is Leonid`, 6));
  
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength){
//     result = message;
//   } else {
//     result = message.slice(0,maxLength) + `...`;
//   }
//   /// Change code above this line
//   return result;
// }


// console.log(formatMessage("Vestibulum facilisis purus nec", 30))


function checkForSpam(message) {
  let result;
  // Change code below this line
  const normalizedMessage = message.toLowerCase();
  if (normalizedMessage.includes(`spam`) || normalizedMessage.includes(`sale`)){
    result = true;
  } else {
    result = false
  }
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));