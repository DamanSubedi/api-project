
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";



export default function NewsCard({ url, createdAt, title, thumbnail, description, simplified }) {
    return (
        <Link to={url} className="news-card">
            <h3>{HTMLReactParser(title)}</h3>
            <p>{createdAt}</p>
            <img src={thumbnail} alt="" />
            <h4>{simplified? `${HTMLReactParser(description).substring(200)}...`:description}</h4>
        </Link>
    )
}