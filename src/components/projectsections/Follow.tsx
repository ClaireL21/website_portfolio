'use client'
import ExportedImage from "next-image-export-optimizer"
import follow_1 from "../../webs_images/proj_images/follow/follow_1.jpg";
import follow_2 from "../../webs_images/proj_images/follow/follow_2.jpg";
import follow_3 from "../../webs_images/proj_images/follow/follow_3.jpg";
import follow_4 from "../../webs_images/proj_images/follow/follow_4.jpg";

const tags = [
  { skill: "Swift"},
  { skill: "Objective-C"},
  { skill: "XCode"},
  { skill: "Figma"}
]
const images = [
  {
      image: follow_1
  },
  {
      image: follow_2
  },
  {
      image: follow_3
  },
  {
      image: follow_4
  },
]
const FollowSection = () => {
  return (
    <div>
        <section id="follow">
            <h1 className="text-center font-bold text-3xl">
                Follow/Following Project
            </h1>
            <div className='custom-body-2'>
            <h1 className="custom-subheading-2">
              Project Overview
            </h1>

            <div className="custom-twocol-body">
                <div className="md:w-1/2">
                    <div className="">
                        This project was done as part of my internship at {" "}
                        <a href="https://queenly.com/how-queenly-works" className="custom-highlighted-text">
                            Queenly
                        </a>
                        , a marketplace
                        for formalwear dresses. Users of the Queenly app have their own closets, where 
                        they can post dress listings they wish to sell. For the iOS app, I implemented the Follow/Following feature, 
                        allowing buyers and sellers to keep track of their favorite closets.
                    </div>

                    <br/>

                    <div>
                        This involved functionality for following closets of Queenly partners, designers, or other users.
                        To do so, I retrieved and updated the user following lists using Firebase API endpoints,
                        and display user follow actions through various UI elements across the app.
                        I created a following carousel and following list page in the home feed, and 
                        added follow/unfollow buttons to user closet, partner, and designer pages.

                    </div>

                    <br/>
                    
                    <div className="mt-2"> 
                        To the right is a video demonstrating the Follow/Following functionality 
                        and below are some in-app screenshots of the feature!
                    </div>

                    <div className="custom-flex-tags-component">
                      {tags.map((item, idx) => {
                          return (
                              <p key={idx}
                                  className="custom-flex-tags-styling"
                                  >
                                  {item.skill}
                              </p>
                          )
                      })}
                    </div>
                </div>
                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <div className="h-[600px] w-[400px]">
                            <iframe className="custom-video-container" src="https://www.youtube.com/embed/ViZbVP2p-14" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-4 md:grid-rows-1 md:gap-8">
                    {images.map((image, idx) => {
                        return (
                            <div className="mt-8" key={idx}>
                                <ExportedImage 
                                    className="rounded-xl"
                                    src={image.image}
                                    alt="" 
                                    width={200} 
                                    height={200}>
                                </ExportedImage>
                            </div>
                        ) 
                    })}
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default FollowSection
