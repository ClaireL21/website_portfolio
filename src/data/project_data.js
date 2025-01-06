import thumb_mc from "../webs_images/thumbnails/thumb_mc.jpg";
import thumb_hrd from "../webs_images/thumbnails/thumb_hrd.jpg";
import thumb_mm from "../webs_images/thumbnails/thumb_mm.jpg"
import thumb_follow from "../webs_images/thumbnails/thumb_follow.jpg";
import thumb_fl from "../webs_images/thumbnails/thumb_fl.jpeg";
import thumb_pf from "../webs_images/thumbnails/thumb_pf.jpg";
import thumb_fff from "../webs_images/thumbnails/thumb_fff.jpg";
import thumb_sf from "../webs_images/thumbnails/thumb_sf.jpg";
import thumb_pb from "../webs_images/thumbnails/thumb_pb.jpg";


const projects = [
    {
        name: "Mini Minecraft: Pandora's Blocks",
        description: 
            "An Avatar inspired mini version of minecraft! " +
            "Infinite generation of minecraft terrain, biome mixing, " +
            "noise based procedural generation, and more.", 
        image: thumb_mc,
        github: "",
        link: "/projects/minecraft",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "High Resolution 3D Models of Formal Dresses",
        description: 
            "Used LIDAR & Photogrammetry as methods of 3D scanning " +
            "and integrated dress renders into the Queenly iOS app.",
        image: thumb_hrd,
        github: "",
        link: "/projects/hrdress",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Micro Maya",
        description: 
            "A mini version of the 3D modeling software Maya. " + 
            "Implements basic 3D mesh operations like deforming meshes, splitting faces, and skinning" + 
            ". Supports smoothing via Catmull-Clark subdivision.",
        image: thumb_mm,
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/micromaya",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Follow/Following Project",
        description: 
            "A Queenly internship project involving implementing the Follow/Following" +
            " feature for the iOS app.",
        image: thumb_follow,
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/follow",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Flicker 2D Platform Game",
        description: 
            "A spooky 2D platform game, created in a 24-hr Game Jam.",
        image: thumb_fl,
        github: "",
        link: "/projects/flicker",
        tags: [
            { skill: "Unity"},
            { skill: "C#"},
            { skill: "Clip Studio Paint"},
            { skill: "Procreate"},
        ]
    },
    {
        name: "Procedural Flame Character",
        description: 
            "A procedurally generated flame character, made in CIS 5660.",
        image: thumb_pf,
        github: "",
        link: "/projects/flame",
        tags: [
            { skill: "Typescript"},
            { skill: "GLSL"},
        ]
    },
    {
        name: "Fun Food Finder",
        description: 
            "A web-scraping food app that locates recipes based on user-entered filters",
        image: thumb_fff,
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/funfoodfinder",
        tags: [
            { skill: "Java"},
            { skill: "Web scraping"},
            { skill: "Jsoup"},
        ]
    },
    {
        name: "Shader Fun",
        description: 
            "A collection of surface and post-processing shaders applied on a 3D mesh of Mario.",
        image: thumb_sf,
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/shaderfun",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Pinboard iOS Mobile App",
        description: 
            "Pinboard is a social app for high school communities where students can post information about school events & clubs",
        image: thumb_pb,
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/pinboard",
        tags: [
            { skill: "Swift"},
            { skill: "Xcode"},
        ]
    },
]

export default projects;