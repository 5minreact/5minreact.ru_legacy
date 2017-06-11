import React from "react";
import {RouteHandler} from "react-router";
import {prefixLink} from "gatsby-helpers";
import {config} from "config";
import "./style.css";
import "../../static/fonts/fontawesome/style.css";

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>

                <ul>
                    <li>
                        <a href={ config.siteTwitterUrl } target="_blank" title="Twitter"><i className='fa fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href={ config.siteYouTubeUrl } target="_blank" title="YouTube"><i className='fa fa-youtube'></i></a>
                    </li>
                    <li>
                        <a href={ config.siteEmailUrl } title="Email"><i className='fa fa-envelope-o'></i></a>
                    </li>
                    <li>
                        <a href={ config.siteRssUrl } target="_blank" title="RSS"><i className='fa fa-rss'></i></a>
                    </li>
                    <li>
                        <a href={ config.siteAndroidUrl } target="_blank" title="Subscribe on Android"><i className="fa fa-android"></i></a>
                    </li>
                    <li>
                        <a href={ config.siteItunesUrl } target="_blank" title="iTunes"><i className='fa fa-podcast'></i></a>
                    </li>
                </ul>
                <p>Рекомендую посетить:<br />
                    <a href="https://devconf.ru/" target="_blank"><strong>DevConf.ru</strong><small>(17 июня 2017, Москва)</small></a>
                </p>
                <p>
                    <small>Listen in English: <a href="https://5minreact.audio"
                                                 target="_blank">https://5minreact.audio</a></small>
                    <small>Послушайте также: <a href="http://5minphp.ru" target="_blank">Пятиминутка PHP</a></small>
                    <small>Автор: <a href={ config.authorTwitterUrl } target="_blank">@PetrMyazin</a></small>
                </p>
                <p>
                    <small><a href="http://opencollective.com/webpack"
                              target="_blank">Спонсирую Webpack, присоединяйтесь!</a></small>
                </p>
            </div>
        );
    }
}

export default SiteLinks