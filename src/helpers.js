export const checkBudget = ( budget, remaining ) => {
    let status_remaining;

    if( ( budget/ 4 ) > remaining ) {
        status_remaining = 'alert alert-danger';
    } else if (( budget/2 ) > remaining ){
        status_remaining = 'alert alert-warning';
    } else {
        status_remaining = 'alert alert-success';
    }

    return status_remaining;
}