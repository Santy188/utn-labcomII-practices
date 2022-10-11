function haceAlgo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let random = Math.random()
            if (random > 0.5) {
                resolve("hola mundowo");
            } else {
                reject("ha ocurrido un error");
            }
        }, 3000);
    });
}

async function test() {
    try {
        let response = await haceAlgo();
        document.getElementById("xd").innerHTML = response
    } catch (error) {
        document.getElementById("xd").innerHTML = error
    }
}

test();