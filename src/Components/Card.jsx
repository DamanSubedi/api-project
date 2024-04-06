import millify from "millify";
import { Link } from "react-router-dom";


export default function Card({ uuid, marketCap, name, price, rank, iconUrl, symbol, color, change}) {
    return (
        <Link to={`/cryptocurrencies/${uuid}`} className="card" style={{
            color: `
        ${color}`
        }}>
            <div className="title">
                <h4>{rank} .</h4>
                <h4>{name}</h4>
            </div>
            <div className="item-info">

                <div className="icon">
                    <img width={50} height={50} src={iconUrl} alt={name} />
                    <h3>{symbol}</h3>
                </div>
                <div className="info">
                        <p>price</p>

                        <h4>$ {Number(price).toFixed(2)}</h4>

                        <p>Market Cap</p>
                        <h4>{millify(marketCap)}</h4>
                        <p>24h Volume</p>
                        <h4>- - -</h4>
                        <p>daily change</p>
                        <h4>{change}%</h4>
                        
                </div>
            </div>
        </Link>
    )
}