
export async function Weather(city) {
    try{
    const response=await fetch(`http://localhost:5000/weather?city=${city}`)

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return (await response.json())

    }catch(error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}

