
import { useState } from "react"
import { useGetCryptosApiQuery } from "./services/cryptoApi"
import { configureStore } from "@reduxjs/toolkit"


export default function App() {
  const { data: { data }, isFetching } = useGetCryptosApiQuery()

  const [crypto, setCrypto] = useState(data?.coins)
  
  console.log(data.coins, data.stats)

  // const headerContent = {
  //   'X-RapidAPI-Key': 'ce9027053fmshc9bf5e9da25f32ap1ee8eajsnc89e27aa7fec',
  //   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  // }

  // const baseUrl = 'https://api.coinranking.com'

  // const url = `${baseUrl}/v2/coins`
  // const options = {
  //   method: "GET",
  //   headers: headerContent
  // }

  // const data = fetch(url, options)
  //   .then(resp => resp.json())
  //   .then(({ data: { stats, coins } }) => coins)
  // console.log(data)

  return (
    <h1>app</h1>
  )
}