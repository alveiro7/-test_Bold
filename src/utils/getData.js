const API_URL = './api/data.json';


const getData = ()  => {
    fetch( API_URL,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                return response.json()
            })
            .then(function(myJson) {
                console.log(myJson)
                setPayments(myJson)

            })
        }
export default getData