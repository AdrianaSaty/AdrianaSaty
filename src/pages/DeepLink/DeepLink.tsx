import React from 'react';
import Loading from '../../components/Loading/Loading';


function DeepLink() {
    const getParameterByName = (name: string, url = window.location.href) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const useDeeplink = () => {
        console.log('use deeplink')
        const youtubeVideoLongLink = 'www.youtube.com/watch?v=';
        const youtubeChannelLink = 'www.youtube.com/c/';
        const youtubeShortLink = 'https://youtu.be/';
        const https = 'https://';
        const www = 'www.';
        let fallbackURL = getParameterByName('u');
        let channelFallback: any = getParameterByName('c');

        if (channelFallback) {
            if (channelFallback.includes(https)) {
                if (channelFallback.includes(www))
                    fallbackURL = channelFallback.replace(https, '');
                else fallbackURL = channelFallback.replace(https, www);
            } else if (!channelFallback.includes(www)) {
                fallbackURL = youtubeChannelLink + channelFallback;
            }
        } else if (fallbackURL) {
            if (fallbackURL.includes(youtubeShortLink)) {
                fallbackURL =
                    youtubeVideoLongLink + fallbackURL.split(youtubeShortLink)[1];
            } else if (fallbackURL.includes(https)) {
                if (fallbackURL.includes(www))
                    fallbackURL = fallbackURL.replace(https, '');
                else fallbackURL = fallbackURL.replace(https, www);
            } else if (!fallbackURL.includes(www)) {
                fallbackURL = youtubeVideoLongLink + fallbackURL;
            }
        } else return;

        const androidApp = `intent://${fallbackURL}#Intent;package=com.google.android.youtube;scheme=https;end`;
        const iosApp = `vnd.youtube://${fallbackURL}`;

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = iosApp;
            window.setTimeout(function () {
                window.location.href = https + fallbackURL;
            }, 25);
        } else if (/Android/i.test(navigator.userAgent)) {
            window.location.href = androidApp;
            window.setTimeout(function () {
                window.location.href = https + fallbackURL;
            }, 25);
        } else {
            window.location.href = https + fallbackURL;
        }

        function killPopup() {
            window.removeEventListener('pagehide', killPopup);
        }

        window.addEventListener('pagehide', killPopup);
    };

    useDeeplink();

    return (
        <Loading></Loading>
    )
}

export default DeepLink;
