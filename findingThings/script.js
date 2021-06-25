const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
function findUserByUsername(array, string) {
    return array.find(function(user) {
        return user.username === string;
    })
};

console.log(findUserByUsername(users, 'mlewis'));

function removeUser(array, string) {

    let user = array.findIndex(function(user) {
        return user.username === string;
    });

    if(user === -1) return;

    return users.splice(user, 1)[0];
     
}

console.log(removeUser(users, 'akagen'));
console.log(removeUser(users, 'akagen'));
