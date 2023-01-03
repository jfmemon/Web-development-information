// Problem: 04
function oddFriend (friends) {
    console.log(friends);
    for (const friend of friends) {
        if (friend.length % 2 != 0){
            return friend;
        }
    }
}
const result = oddFriend (['jack', 'rosese', 'habluu', 'mijaan', 'mahinAhmedE']);
console.log(result);