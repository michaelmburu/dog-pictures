import { useEffect, useState } from "react"

export default function DogPics () {
    // API: https://dog.ceo/dog-api/
    const [data, setData] = useState('')
    const apiUrl = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
      getDog().then((dogData) => setData(dogData))       
    }, [])

    const getDog = async () => {
        const reponse = await fetch(apiUrl)
        const dog = await reponse.json()
        return dog;
    }
    return (
      <div className='dog-pics'>
        <img src={data.message} alt='dog' />
        <button onClick={async () => setData(await getDog())}>🐶</button>
      </div>
    )
  }