import { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaBars } from 'react-icons/fa'
import { MdCurrencyBitcoin } from "react-icons/md";
import cryptoLogo from '../asset/cryptocurrency.png'
import '../index.css'


export default class SideBar extends Component {
    state = {
        showLink: false,
        activeTab: 0,
        data: [
            { id: 1, icon: <FaHome />, tabTitle: "home", path: "/", active: true },
            { id: 2, icon: <MdCurrencyBitcoin />, tabTitle: "cryptocurrencies", path: "/cryptocurrencies", active: false },
            { id: 3, icon: <FaNewspaper />, tabTitle: "cryptonews", path: "/cryptonews", active: false },
        ]
    }
    render() {
        return (
            <article className="sideBar">
                <div className="sideBar-center">
                    <div className="logo-container">
                        <div className="signature">

                            codeBy<span>Daman</span>
                        </div>
                        <div className="nav-center">

                            <div className="cryptoLogo">
                                <img src={cryptoLogo} alt={"cryptologo"} />
                                <p>cryptoVerse</p>
                            </div>
                            <button className="nav-toggle"
                            onClick={()=>this.setState({showLink:!this.state.showLink})}>
                                <FaBars />
                            </button>
                        </div>



                    </div>
                    {/* <div className="link-container"> */}
                    <ul className={`links-container ${this.state.showLink ? "show-links" : null}`}>

                        {this.state.data.map(item => {
                            const { id, icon, tabTitle, path } = item
                            return (
                                <li key={id}
                                    className={`link ${this.state.activeTab === id ? "active" : null}`}
                                    onClick={() => {
                                        this.setState({ activeTab: id, showLink:!this.state.showLink })

                                    }}
                                >
                                    <Link to={path}>{icon} {tabTitle}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>

            </article>
        )
    }
}