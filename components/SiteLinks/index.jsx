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
                        <a href={ config.siteTelegramUrl } title="Telegram"><i className='fa fa-telegram'></i></a>
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

                <p>
                    <small>Author: <a href={ config.authorTwitterUrl } target="_blank">@PetrMyazin</a></small>
                    <small>Sponsor of Webpack,  <a href="http://opencollective.com/webpack"
                                                   target="_blank">join!</a></small>
                    <small>Listen in English: <a href="https://5minreact.audio"
                                                 target="_blank">https://5minreact.audio</a></small>

                </p>
                <p>

                </p>
                <p>
                    <small>Послушайте также:</small>
                    <small><a href="https://soundcloud.com/5minangular" target="_blank">Пятиминутка Angular</a></small>
                    <small><a href="http://5minphp.ru" target="_blank">Пятиминутка PHP</a></small>
                </p>

                <p>
                    Рекомендую посетить:<br />
                    <a href="https://events.yandex.ru/events/yasubbotnik/" target="_blank"><strong>Я.Субботник</strong>, 12 авг, Спб</a><br />
                    <a href="https://holyjs-moscow.ru/" target="_blank"><strong>HolyJS</strong>, 10-11 дек, Москва</a>
                </p>
            </div>
        );
    }
}

export default SiteLinks