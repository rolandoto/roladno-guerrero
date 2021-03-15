
export const gefgifs =  async(categor) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categor)}&limite=10&api_key=Bl5n93o1TXOey7JMQbDqAUkbx2RYXyNQ`
    const resp = await fetch(url)
    const {data} = await resp.json()


    const gif = data.map( img => {

        return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
        }

    })


 
    return gif     
    
}
