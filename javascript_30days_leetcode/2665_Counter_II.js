/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value = init;
    const increment = function(){
        value++;
        return value;
    };
    const decrement = function(){
        value--;
        return value;
    };
    const reset = function(){
        value = init;
        return value;
    };
    return{
        increment,
        decrement,
        reset,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */