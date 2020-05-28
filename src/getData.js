const API_DEMO  = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
const API       = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=hZAYRT2CW4W1TaBvZDdH8fyMTVEwzvBoVMXqbBWD'

async function getData() {
    try {
        const response  = await fetch(API)
        const res       = await response.json()
        const data      = await res.near_earth_objects
        return data
    } catch {
        console.log(Error)
    }
}