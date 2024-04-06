import { Link } from "react-router-dom"
import { useGetCryptoNewsQuery } from "../services/cryptonewsApi"
import NewsCard from "../Components/NewsCard"





export default function Cryptonews() {
    const { data, isFetching } = useGetCryptoNewsQuery()
    const news = data?.data
    console.log(news)
    if (isFetching) return "loading..."
    return (
        <div className="card-container">
            {news?.map((item, i) => {
                return (
                    <NewsCard key={i} {...item} />
                )
            })}

        </div>
    )
}