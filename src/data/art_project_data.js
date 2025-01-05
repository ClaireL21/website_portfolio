import thumb_dr from "../webs_images/thumbnails/thumb_dr.jpeg";
import thumb_gr from "../webs_images/thumbnails/thumb_gr.jpeg";
import thumb_nd from "../webs_images/thumbnails/thumb_nd.jpeg";

const art_projects = [
    {
        name: "Underwater Retro Diner Environment",
        description: 
            "An environment.", 
        image: thumb_dr,
        github: "",
        link: "/projects/dinerArt",
        tags: [
            { skill: "Maya"},
            { skill: "Photoshop"},
        ]
    },
    {
        name: "Gertrude",
        description: 
            "A character model of Gertrude, from Skottie Young's I Hate Fairyland",
        image: thumb_gr,
        github:"",
        link: "/projects/gertrudeArt",
        tags: [
            { skill: "Maya"},
        ]
    },
    {
        name: "Noodle",
        description: 
            "A character model based on the 2D art of Noodle from the Gorillaz band.", 
        image: thumb_nd,
        github: "",
        link: "/projects/noodleArt",
        tags: [
            { skill: "Maya"},
            { skill: "ZBrush"},
        ]
    },
]
export default art_projects;