var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var random = Math.random()
        console.log(random)
        if (random > 0.5) {
            resolve("Hola mundo");
        } else {
            reject("ha ocurrido un error")
        }
    }, 3000);
});
myPromise
    .then(function(value) {
        document.getElementById("xd").innerHTML = value;
    })
    .catch(function(error) {
        document.getElementById("xd").innerHTML = error;
    });