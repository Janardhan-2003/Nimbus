
export async function Weather(city) {
    try{
    const response=await fetch(`https://nimbus-m4jq.onrender.com/weather?city=${city}`)

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
   
    return (await response.json())

    }catch(error) {
        return null;
    }
}

