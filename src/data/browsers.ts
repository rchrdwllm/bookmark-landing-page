import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

export interface Browser {
    browser: string;
    name: string;
    minVersion: number;
    scrollSpeed: number;
}

const browsers: Browser[] = [
    {
        browser: chrome,
        name: "Chrome",
        minVersion: 62,
        scrollSpeed: 5.5,
    },
    {
        browser: firefox,
        name: "Firefox",
        minVersion: 55,
        scrollSpeed: 4,
    },
    {
        browser: opera,
        name: "Opera",
        minVersion: 46,
        scrollSpeed: 2.5,
    },
];

export default browsers;
