// Immediately Invoked Function Expressions (IIFE) 

(function program() {
    console.log(`Db connected`);
    // named IIFE //
})();
((name)=> {
    console.log(`Db connected Two, ${name}`);
    // unnamed IIFE //
})('Ahmed')