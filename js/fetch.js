fetch('/json/data.json')
    .then((response => response.json()))
    .then((data) => {
        data.forEach(element => {
            const divs = document.getElementById(`${element.id}`)
            divs.innerHTML = `
                ${element.texto}
            `
        });
    })