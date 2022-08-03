import axios from 'axios';

const baseUrl = 'http://localhost:3001/patients'

async function postPatient (){
    try {
        const response = await axios({
            url:'${baseUrl}/login',
            method: 'POST'
        })
        return response;
    }catch (error){
        console.log(error);
    }
}

export default postPatient;