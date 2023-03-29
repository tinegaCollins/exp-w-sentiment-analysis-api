import axios from 'axios'
export default async function (text: string,) {
    const encodedParams = new URLSearchParams()
    encodedParams.append('text', text)

    const options = {
        method: 'POST',
        url: 'https://text-sentiment.p.rapidapi.com/analyze',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '45795778b2mshc65c825db6a5520p1897c5jsn18929dd5769c',
            'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com',
        },
        data: encodedParams,
    }

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data)
            return {
                status: 200,
                body: response.data,
            }
        })
        .catch(function (error) {
            console.error(error)
        })
}