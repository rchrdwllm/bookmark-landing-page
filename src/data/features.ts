import feature1 from "../images/illustration-features-tab-1.svg";
import feature2 from "../images/illustration-features-tab-2.svg";
import feature3 from "../images/illustration-features-tab-3.svg";

export interface Feature {
    label: string;
    title: string;
    caption: string;
    image: string;
}

const features: Feature[] = [
    {
        label: "Simple Bookmarking",
        title: "Bookmark in one click",
        caption:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: feature1,
    },
    {
        label: "Speedy Searching",
        title: "Intelligent search",
        caption:
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: feature2,
    },
    {
        label: "Easy Sharing",
        title: "Share your bookmarks",
        caption:
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: feature3,
    },
];

export default features;
