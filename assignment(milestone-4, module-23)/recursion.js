// print 1 to 5 in using recursion
function recursion (i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    recursion (++i);
}
recursion(1);