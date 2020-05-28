const $container = document.getElementById('container')

const itemTemplate = object => {
    return(
        `
            <div class="object">
                <img src="./src/img/imagen.png" alt="img">
                <div class="info">
                    <h1 class="name"></h1>
                    <p>dato 1: <span>${object.name}</span></p>
                    <p>dato 2: <span>${object.estimated_diameter.kilometers.estimated_diameter_max}</span></p>
                    <p>dato 3: <span>${object.estimated_diameter.kilometers.estimated_diameter_min}</span></p>
                    <p>dato 4: <span>${object.designation}</span></p>
                </div>
            </div>
        `
    )
}

async function loadElements() {
    const objects   = await getData()
    const string    = await objects.map(object=> itemTemplate(object))
    string.forEach(template => $container.innerHTML += template)
}