// have to print the largest string of an array
function bestFriends (friends) {
    console.log(friends);
    let tempArray = friends[0];
    for (const friend of friends){
        if (friend.length > tempArray.length) {
            tempArray = friend;
        }
    }
    return tempArray;
}

const result = bestFriends(['jack', 'leoNardoDecaprio', 'leonelMessi', 'ronaldo']);
console.log(result + ' is the largest name here.');