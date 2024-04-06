import { Component, useEffect, useState } from "react";
import { useGetCryptosApiQuery } from "../services/cryptoApi";
import SectionTitle from "../Components/SectionTitle";
import Card from "../Components/Card";

export default function Cryptocurrencies() {
    const { data, isFetching } = useGetCryptosApiQuery(100)
    const [cryptoList, setCryptoList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setCryptoList(data?.data?.coins)
        let filteredCrypto = data?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm) || coin.symbol.toLowerCase().includes(searchTerm))
        setCryptoList(filteredCrypto)
    }, [searchTerm, data])

    console.log(cryptoList, searchTerm)
    if (isFetching) {
        return 'Loading...'
    }
    return (
        <section className="section">


            <SectionTitle title={"crypto currencies"} />
            <input
            className="crypto-search"
                type="text"
                onChange={
                    (e) => setSearchTerm(e.target.value.toLowerCase())
                }
                placeholder="search crypto"
            />
            <div className="card-container">
                {cryptoList?.map(crypto => {
                    return (<Card key={crypto.rank} {...crypto} />)
                }
                )}
            </div>
        </section>)

}