const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
// const usersByPet = pet => {
//   let ans = [];
//   for (const prop in database.users){
//     if (database.users[prop].favPet == pet){
//       ans.push(database.users[prop]);
//     }

//   }
//   return ans
// }
// console.log(usersByPet('dog'))
// console.log(usersByPet('cat'))

const {users, friends, college}

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  let id = -1
  let userCol, color

  users.forEach(element => {
    if (element.firstName == user){
      id = element.collegeId
      userCol = college[id].name
      color = college[id].color 

    }
  })
  if (id == -1){
    console.log('Error')
  }
}


console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = friends.filter(pair => 
  users[pair.id1].favPet != user[pair.id2].favPet

  );
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = users.filter(person => person.state == college[person.collegeId].state )
console.log(local)

// // define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = friends.filter(pair =>  college[pair.id1.collegeId].state == college[pair.id2.collegeId].state)
console.log(collegeFriends)
