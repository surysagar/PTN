var today = new Date();
function checkLeap() {
    if((today.getYear())%4 === 0 )
        console.log('29 Days');
    else
        console.log('28 Days');
};
checkLeap()  // 28 days