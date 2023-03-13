// Receives a function and calls it
function receivesAFunction(spy){
    spy()
}

// "Before all" hook
function returnsANamedFunction(){
    return function fn(){}
}
function returnsAnAnonymousFunction(){
    return ()=>{}
}