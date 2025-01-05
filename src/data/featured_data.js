import thumb_mc from "../webs_images/thumbnails/thumb_mc.jpg";
import thumb_hrd from "../webs_images/thumbnails/thumb_hrd.jpg";
import thumb_mm from "../webs_images/thumbnails/thumb_mm.jpg"

const featured_projects = [
    {
        name: "Mini Minecraft: Pandora's Blocks",
        description: 
            "An Avatar inspired mini version of minecraft! " +
            "Infinite generation of minecraft terrain, biome mixing, " +
            "noise based procedural generation, and more.", 
        image: thumb_mc,
        github: "",
        link: "/projects/miniMinecraft",
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
        link: "/projects/highResDress",
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
        link: "/projects/microMaya",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
]

export default featured_projects;