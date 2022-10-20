// Step 1: Define inteface/class
interface IMovie{
    title: string
    year: string
    imdbID: string
}

// Step 2: Consume REST API
const webAPI = "https://jsonmock.hackerrank.com/api/movies"

// Step 3: fetch all data using async/await/promise
const fetchAllMovies = async (url: string): Promise<IMovie[]> =>{
    const response = await fetch(url)
    const data: any = await response.json()
    console.log(data)
    return data
}

const searchByImdbId = async (url: string, imdbId: string): Promise<IMovie[]> => {
    const response = await fetch(url+'?imdbID='+imdbId)
    const data: any = await response.json()
    console.log(data)
    return data    
}

// Step 4: Call asynchronous function
fetchAllMovies(webAPI)
searchByImdbId(webAPI,'tt0161077')

// Step 4: Reference js file in html to see output in console

