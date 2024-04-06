import { useEffect, useState } from "react"
import { useParams, } from "react-router-dom"
import { Link } from "react-router-dom"
import { useGetCoinPriceHistoryQuery, useGetCryptoDetailQuery, useGetCryptosApiQuery } from "../services/cryptoApi"
import SectionTitle from "../Components/SectionTitle"
import millify from "millify"
import LineChart from "../Components/LineChart"


export default function CryptoDetails() {
    const param = useParams()
    const [uuid, setUuid] = useState(param?.uuid)
    const [timeperiod, setTimeperiod] = useState('7d')
    const { data, isFetching } = useGetCryptoDetailQuery({ uuid, timeperiod })
    const { data: priceHistory } = useGetCoinPriceHistoryQuery({ uuid, timeperiod })
    const timePeriod = ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']

    const crypto = data?.data?.coin
    const cryptoPriceHistory = priceHistory?.data?.history

    if (isFetching) return "loading..."
    return (
        <section className="crypto-detail-container">
            <div className="crypto-title" style={{ color: crypto.color }}>
                <img src={crypto.iconUrl} alt={`${crypto.name} logo`} width={50} />
                <h1>{crypto.name}  </h1>

            </div>
            <article className="crypto-description">
                <p>what is {crypto.name}?</p>
                <p>{crypto.description}?</p>
            </article>
            <Link to={crypto.websiteUrl}>
                visit official site
            </Link>
            <label htmlFor="duration">select duration</label>
            <select id="duration" onChange={(e) => setTimeperiod(e.target.value)} value={timeperiod}>
                {timePeriod.map(time => {
                    return (
                        <option value={time} key={time}>{time}</option>
                    )
                })}
            </select>
            <div className="overview">
                <article className="crypto-chart">
                    <SectionTitle title={`${crypto.name} price chart`} />
                    <LineChart coinHistory={cryptoPriceHistory} />
                </article>
                <div className="crypto-info">

                    <article className="crypto-overview">
                        <SectionTitle title={"currency overview"} />
                        <div className="crypto-overview-center">
                            <p>symbol</p><h3>: {crypto.symbol}</h3>
                            <p>rank</p><h3>: {crypto.rank}</h3>
                            <p>{timeperiod} change</p><h3>: {crypto.change} %</h3>
                            <p>all Time High</p><h3 title={crypto.allTimeHigh.price}>: $ {Number(crypto.allTimeHigh?.price).toFixed(2)}</h3>
                            <p>bitcoin price</p><h3 title={crypto.btcPrice}>: {Number(crypto.btcPrice).toFixed(2)} bitcoin</h3>
                            <p>number of exchanges</p><h3>: {crypto.numberOfExchanges || null}</h3>
                            <p>number of markets</p><h3>: {crypto.numberOfMarkets || null}</h3>
                        </div>
                    </article>
                    <article className="market-overview">
                        <SectionTitle title={"market overview"} />
                        <div className="market-overview-center">
                            <p>first supply</p><h3>: {new Date(crypto.supply.supplyAt).toLocaleDateString() || null}</h3>
                            <p>total coin in market</p><h3>: {crypto.supply.circulating || null}</h3>
                            <p>total existing coin</p><h3>: {crypto.supply.total || null}</h3>
                            <p>max supply amount</p><h3>: {crypto.supply.max || null}</h3>
                            <p>market cap</p><h3>: {millify(crypto.marketCap) || null}</h3>
                            <p></p><h4></h4>

                        </div>
                    </article>
                </div>
                <div className="crypto-price-chart">

                </div>
            </div>
            <div className="crypto-links">
                <h3>{crypto.name} links</h3>
                {crypto.links?.map((link, i) => {
                    return (
                        <div className="crypto-link-container" key={i}>
                            <p>{link.name}</p>
                            <p>{link.type}</p>
                            <Link to={link.url}>{link.url}</Link>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}