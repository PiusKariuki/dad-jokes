import axios from "axios";

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const {data} =await axios.get('https://icanhazdadjoke.com', config)

    document.getElementById('joke').innerHTML = data.joke
}


export default generateJoke