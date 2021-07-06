//function createInstructor(firstName, lastName){
    //return {
      //firstName: firstName,
      //lastName: lastName
    //}
  //}

// refactor to ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//var favoriteNumber = 42;

//var instructor = {
  //firstName: "Colt"
//}

//instructor[favoriteNumber] = "That is my favorite!"

//refactor
let favoriteNumber = 42;
let instructor = {
    [favoriteNumber]: 'That is my Favorite'
}

// var instructor = {
    //firstName: "Colt",
    //sayHi: function(){
     // return "Hi!";
   // },
    //sayBye: function(){
     // return this.firstName + " says bye!";
    //}
 // }

 //refactor

 let instructor = {
     firstName: 'colt',
     sayHi() {
         return "hi";
     },
     sayBye() {
         return 'bye';
     }
 }

 //const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
//d.bark()  //"Woooof!"

//const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
//s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}