import axios from 'axios'

export const fetchRestoran = async () => {
    try {
    const data = await axios.get("https://nofikoff.github.io/all-restaurants/resta.json")
        .then((data)=>{
            return data;
        })
        .catch((err)=>{
            console.log(err);
        })

        return data;
    } catch {} 
}


