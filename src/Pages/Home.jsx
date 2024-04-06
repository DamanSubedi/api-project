import { Component, useState } from "react";
import { cryptoApi, useGetCryptosApiQuery } from "../services/cryptoApi";
import SectionTitle from "../Components/SectionTitle";
import Card from '../Components/Card'
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptoNewsQuery } from "../services/cryptonewsApi";
import NewsCard from "../Components/NewsCard";


export default function Home() {
    const { data, isFetching } = useGetCryptosApiQuery(10)
    const { data: newss, isLoading } = useGetCryptoNewsQuery()
    const cryptos = data?.data?.coins
    const marketStats = data?.data?.stats

    const news = newss?.data.slice(0, 5)




    // console.log(marketStats, news)
    return (<main className="main">
        <section className="section">
            <SectionTitle title={"market summary"} />
            <div className="market-info">
                <p>Today's cryptocurrencies</p>
                <h4>{marketStats?.totalCoins}</h4>

                <p>Total exchanges</p>
                <h4>{marketStats?.totalExchanges}</h4>
                <p>Total marketCap</p>
                <h4>{
                    millify(marketStats?.totalMarketCap)
                }</h4>
                <p>Total cryptocurrencies</p>
                <h4>{marketStats?.totalMarkets}</h4>
            </div>

        </section>
        <section className="section">


            <SectionTitle title={"Trending 10 cryptos"} />
            <Link to="/cryptocurrencies" className="show-more">show more</Link>
            <div className="card-container">
                {cryptos?.map(crypto => {
                    return (<Card key={crypto.uuid} {...crypto} />)
                }
                )}
            </div>
        </section>
        <section className="section">


            <SectionTitle title={"Trending 5 news"} />
            <Link to="/cryptonews" className="show-more">show more</Link>
            <div className="card-container">
                {news?.map((newss, i) => {
                    return (<NewsCard key={i} {...newss} simplified />)
                }
                )}
            </div>

        </section>
    </main>

    )
}