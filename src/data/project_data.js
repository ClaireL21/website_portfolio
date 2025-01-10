import thumb_mc from "../webs_images/thumbnails/thumb_mc.jpg";
import thumb_hrd from "../webs_images/thumbnails/thumb_hrd.jpg";
import thumb_mm from "../webs_images/thumbnails/thumb_mm.jpg"
import thumb_follow from "../webs_images/thumbnails/thumb_follow.jpg";
import thumb_fl from "../webs_images/thumbnails/thumb_fl.jpeg";
import thumb_pf from "../webs_images/thumbnails/thumb_pf.jpg";
import thumb_fff from "../webs_images/thumbnails/thumb_fff.jpg";
import thumb_sf from "../webs_images/thumbnails/thumb_sf.jpg";
import thumb_pb from "../webs_images/thumbnails/thumb_pb.jpg";
import thumb_rb from "../webs_images/thumbnails/thumb_rb.jpg";
import thumb_st from "../webs_images/thumbnails/thumb_town.jpg";
import thumb_house from "../webs_images/proj_images/town/house_hda.jpg";
import thumb_fury from "../webs_images/thumbnails/thumb_fury.jpg";
import thumb_bya from "../webs_images/thumbnails/thumb_bya.jpg";
import thumb_carousel from "../webs_images/thumbnails/thumb_carousel.jpg";
import thumb_ornament from "../webs_images/thumbnails/thumb_ornament.jpg";
import thumb_dr from "../webs_images/thumbnails/thumb_dr.jpeg";
import thumb_gr from "../webs_images/thumbnails/thumb_gr.jpeg";
import thumb_nd from "../webs_images/thumbnails/thumb_nd.jpeg";
import thumb_pathtracer from "../webs_images/thumbnails/thumb_pathtracer.jpg";
import thumb_pbr from "../webs_images/thumbnails/thumb_pbr.jpg";
import thumb_ssr from "../webs_images/thumbnails/thumb_ssr.jpg";
import thumb_hk from "../webs_images/thumbnails/thumb_hk.png";
import thumb_jf from "../webs_images/thumbnails/thumb_jelly.jpg";
import thumb_lego from "../webs_images/thumbnails/thumb_lego.jpg";

// TODO
// chili lights
// yarndiction
// screen space reflection
// two ui ux projects
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
        ],
        filter: "Programming",
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
        ],
        filter: "Programming",
    },
    {
        name: "Procedural Carousel Tool",
        description: 
            "An artist friendly tool for generating procedural carousels",
        image: thumb_carousel,
        github: "https://github.com/ClaireL21/Procedural-Carousels",
        link: "/projects/carousels",
        tags: [
            { skill: "Houdini"},
            { skill: "Unreal Engine"},
            { skill: "Tools for Artists"},
            { skill: "Substance Painter / Designer"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Procedural LEGO-ifier Tool",
        description: 
            "A tool that takes any input mesh and outputs the same mesh composed of various lego blocks",
        image: thumb_lego,
        github: "https://github.com/ClaireL21/hw03-legos/tree/main",
        link: "/projects/lego",
        tags: [
            { skill: "Houdini"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Byakugan: VR 360 Hack n Slash",
        description: 
            "VR Hack n Slash game developed in Unreal Engine with Meta Quest 3",
        image: thumb_bya,
        github: "https://github.com/ClaireL21/Byakugan-VR-Game",
        link: "/projects/byakugan",
        tags: [
            { skill: "Unreal Engine"},
            { skill: "Blueprints"},
            { skill: "VR"},
        ],
        filter: "Games",
    },
    {
        name: "Stylized Town Scene",
        description: 
            "Stylized watercolor shader with procedural models, " +
            "surface deformation shaders, and post processing effects.",
        image: thumb_st,
        github: "https://github.com/ClaireL21/stylized-medieval-town",
        link: "/projects/town",
        tags: [
            { skill: "Unity"},
            { skill: "Shader Graph"},
            { skill: "Houdini"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Monte Carlo Path Tracer",
        description: 
            "Cornell box path tracer",
        image: thumb_pathtracer,
        github: "",
        link: "/projects/pathtracer",
        tags: [
            { skill: "todo"},
        ],
        filter: "Programming",
    },
    {
        name: "PBR",
        description: 
            "todo",
        image: thumb_pbr,
        github: "",
        link: "/projects/pbr",
        tags: [
            { skill: "todo"},
        ],
        filter: "Programming",
    },
    {
        name: "SDF Fun",
        description: 
            "todo",
        image: thumb_hk,
        github: "",
        link: "/projects/sdf",
        tags: [
        ],
        filter: "Programming",
    },
    {
        name: "Flames of Fury: 2.5D Platform Game",
        description: 
            "2.5D platform game created in Unreal Engine",
        image: thumb_fury,
        github: "https://github.com/ClaireL21/FlamesOfFuryGame",
        link: "/projects/fury",
        tags: [
            { skill: "Unreal Engine"},
            { skill: "Blueprints"},
        ],
        filter: "Games",
    },
    {
        name: "Stylized Shader Robot Scene",
        description: 
            "Stylized toon shader with half tone shading, " +
            "post processing effects, and interactivity.",
        image: thumb_rb,
        github: "",
        link: "/projects/robot",
        tags: [
            { skill: "Unity"},
            { skill: "Shader Graph"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Procedural Ornament Tool",
        description: 
            "An ornament tool created for the Procedural Carousels. " +
            "Generates a variety of distinct looking ornaments that can decorate the sides of a mesh. "
            ,
        image: thumb_ornament,
        github: "",
        link: "/projects/ornament",
        tags: [
            { skill: "Houdini"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Micro Maya",
        description: 
            "A mini version of the 3D modeling software Maya. " + 
            "Implements basic 3D mesh operations like deforming meshes, splitting faces, and skinning" + 
            ". Supports smoothing via Catmull-Clark subdivision.",
        image: thumb_mm,
        github: "",
        link: "/projects/micromaya",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ],
        filter: "Programming",
    },
    {
        name: "Procedural Jellyfish",
        description: 
            "A procedurally modeled and animated jellyfish",
        image: thumb_jf,
        github: "https://github.com/ClaireL21/hw02-jellyfish/tree/main?tab=readme-ov-file",
        link: "/projects/jellyfish",
        tags: [
            { skill: "Houdini"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Procedural House Tool",
        description: 
            "Basic procedural house tool created for the Stylized Town Scene.",
        image: thumb_house,
        github: "",
        link: "/projects/house",
        tags: [
            { skill: "Houdini"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Follow/Following Project",
        description: 
            "A Queenly internship project involving implementing the Follow/Following" +
            " feature for the iOS app.",
        image: thumb_follow,
        github: "",
        link: "/projects/follow",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ],
        filter: "Programming",
    },
    {
        name: "Flicker: 2D Platform Game",
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
        ],
        filter: "Games",
    },
    {
        name: "Procedural Flame Character",
        description: 
            "A procedurally generated flame character, made in CIS 5660.",
        image: thumb_pf,
        github: "https://github.com/ClaireL21/hw01-fireball",
        link: "/projects/flame",
        tags: [
            { skill: "Typescript"},
            { skill: "GLSL"},
        ],
        filter: "Tech Art",
    },
    {
        name: "Fun Food Finder",
        description: 
            "A web-scraping food app that locates recipes based on user-entered filters",
        image: thumb_fff,
        github: "",
        link: "/projects/funfoodfinder",
        tags: [
            { skill: "Java"},
            { skill: "Web scraping"},
            { skill: "Jsoup"},
        ],
        filter: "Programming",
    },
    {
        name: "Shader Fun",
        description: 
            "A collection of surface and post-processing shaders applied on a 3D mesh of Mario.",
        image: thumb_sf,
        github: "",
        link: "/projects/shaderfun",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ],
        filter: "Programming",
    },
    {
        name: "Pinboard iOS Mobile App",
        description: 
            "Pinboard is a social app for high school communities where students can post information about school events & clubs",
        image: thumb_pb,
        github: "",
        link: "/projects/pinboard",
        tags: [
            { skill: "Swift"},
            { skill: "Xcode"},
        ],
        filter: "Programming",
    },
    {
        name: "Underwater Retro Diner Environment",
        description: 
            "An underwater environment with a hidden octopus in the background!", 
        image: thumb_dr,
        github: "",
        link: "/projects/diner",
        tags: [
            { skill: "Maya"},
            { skill: "Photoshop"},
        ],
        filter: "3D Modeling"
    },
    {
        name: "Gertrude",
        description: 
            "A character model of Gertrude, from Skottie Young's I Hate Fairyland",
        image: thumb_gr,
        github:"",
        link: "/projects/gertrude",
        tags: [
            { skill: "Maya"},
        ],
        filter: "3D Modeling"
    },
    {
        name: "Noodle",
        description: 
            "A character model based on the 2D art of Noodle from the Gorillaz band.", 
        image: thumb_nd,
        github: "",
        link: "/projects/noodle",
        tags: [
            { skill: "Maya"},
            { skill: "ZBrush"},
        ],
        filter: "3D Modeling"
    },
]

export default projects;