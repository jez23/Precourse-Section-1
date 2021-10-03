// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo(a, b) {
  // return the remainder of the division a / b
  return a % b;
}

function squareRoot(n) {
  // return the square root of n
  return  Math.sqrt(n); 
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power
  return Math.pow(m , n);
}

function formatMoney(amount) {
  /**
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */
  return `£${amount.toFixed(2)}`;
}

function calculateCircleArea(r) {
  // return the area of a circle with radius r
  // round result to 3 decimal numbers
  return +(r * r * Math.PI).toFixed(3);
}

function calculateFullTurns(degrees) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees
  return Math.floor(degrees / 360);
}

function getLength(str) {
  // return the length of the passed string
  return str.length;
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them
  return `${firstName} ${lastName}`;
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
  return str.split("").map((letter, i) => i === 0? letter.toUpperCase() : letter).join("");
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
  return SENTENCE.split("").map((letter, i) => i === 0? letter.toUpperCase() : letter.toLowerCase()).join("");

}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  return str.length % 2 === 0? `${str[str.length/2 - 1]}${str[(str.length/2)]}`: str[Math.floor(str.length/2)];
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
  const splitSentence = words.split(' ');
  return splitSentence[splitSentence.length - 1];
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")
  return words.split(" ").join("-");
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
 
  
  return words.split(" ").map((word, i) => {
    if(i !== 0){
        const removeFirstLetter  = word.slice(1)
        const firstLetterUpper = word[0].toUpperCase();
        return `${firstLetterUpper}${removeFirstLetter}`;
    } 
    return word.toLowerCase();
  }).join("");

}

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
  return left === right? true: false;
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal
  return left !== right? true: false;
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
 return year >= 1960 && year <= 1969? true: false; 
}

function isEvenLength(string) {
  // return true if string has an even length
  return string.length % 2 == 0? true : false
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  return left.toLowerCase() === right.toLowerCase()? true: false;
}

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
  return nums.filter(num => num % 2 === 0 ? true : false);
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  return array.filter(word => word.length > len);
}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  return array.slice(array.length - n);
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
  sandwich.pop();
  sandwich.shift();
  return sandwich;
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  return array.filter((item, i) => i !== n? true: false);

}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
  return [...arr1, ...arr2];
}

function flattenArrayByOne(arrayOfArrays) {
  // given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  // for example:
  // [[1],[2],[[3,4]]] => [1,2,[3,4]]
  return arrayOfArrays.flat(1);
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays
  const checking =  arrayOfArrays.filter(array => {
    return array.includes(item) ? true : false;
  })
  return checking.length === arrayOfArrays.length? true: false;
}

function isOver40(user) {
  /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
   return user.age > 40? true: false;
}

function getUserAge(user) {
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
  const currentYear = new Date().getFullYear();
  return currentYear - user.yearOfBirth;
}

function getUserPetAge(user) {
  /*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */

      return user.pet.age;
}

function createProduct() {
  /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */

    return {
      type: "socks",
      price: 3.00
    }
}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */

    product.price = price;
    return product;
}

function getPropertyOfProduct(product, property) {
  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
 return product[property];

}

function addPropertyToProduct(product, property, value) {
  /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
    product[property] = value;
    return product;

}

function createNorthcoder(name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be in the year 2019
  // a language property set to 'JavaScript'

  return {
    name: name,
    age: 2019 - yearOfBirth,
    language: 'JavaScript'
  }
}

function updateVoterAddress(voter, correctHouseNumber) {
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */

    voter.address.houseNumber = correctHouseNumber;
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.
  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`
}

function getNorthcodersNames(northcoders) {
  // should take an array of objects with the format from createNorthcoder
  // returns an array of the users' names as strings
      return northcoders.reduce((acc, cur) => {
        const name = cur.name;
        acc = [...acc, name];
        return acc;
      }, []);
}

function getAlbumProperties(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
  return Object.keys(obj);
}

function deleteManyPasswords(users) {
  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */

    users.forEach(obj => {
      delete  obj.password;
    })

    return users;
}

function countTheObjects(arr) {
  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
    let numberOfObjects = 0;
    arr.forEach(item => {
      if(typeof item === 'object' && Array.isArray(item) === false && item != null){
        numberOfObjects += 1;
      }
    })
    return numberOfObjects;
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects
};
