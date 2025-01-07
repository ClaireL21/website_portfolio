'use client'

import ExportedImage from "next-image-export-optimizer"
import fff_1 from "../../webs_images/proj_images/fffinder/FFF.png";
import fff_2 from "../../webs_images/proj_images/fffinder/fff2.png";

const tags = [
  { skill: "Java"},
  { skill: "Web scraping"},
  { skill: "Jsoup"},
]

const FFFinderSection = () => {
  return (
    <div>
        <section id="fffinder">
            <h1 className="text-center font-bold text-3xl">
                Fun Food Finder
            </h1>
            <div className='custom-body-2'>
            <div className="mt-8">
                This project was a final project for NETS 1500, where
                I worked in a group of three to create a web-scraping app for 
                locating recipes based on user entered filters. 
                It uses Java’s Jsoup library to webscrape HTML and locate specific recipes.

            </div>

            <br/>
                
            <div>
                Personal contributions:
                <ul className="px-8 list-disc">
                    <li>Responsible for writing program to establish website connection and access & parse relevant data, </li>
                    <li>Designed and implemented UI & UX for displaying recipes on Java GUI app based on user filters</li>
                </ul>
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

            <br/>
            <h1 className="custom-subheading-2">
                Overview
            </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-3/5">
                    <div className=""> 
                    Users can:

                    <ul className="px-8 list-disc">
                        <li>Enter their individual allergies</li>
                        <li>Check off common dietary restrictions</li>
                        <li>Filter recipes based on meal types (i.e. lunch or dinner)</li>
                    </ul>

                </div>

                <br/>
                
                <div>
                    Once recipes are located on the web:
                    <ul className="px-8 list-disc">
                        <li>Recipes can be sorted based on star ratings or cook time</li>
                        <li>Check off common dietary restrictions</li>
                        <li>Recipe instructions are scraped and displayed in the app itself. </li>
                    </ul>
                </div>

                <br/>

                <div>
                    Lastly, as a fun, extra feature, we implemented a random meal plan option. 
                    A random breakfast, lunch, dinner, snack, and dessert recipe is displayed 
                    for the user as their meal plan for the day.
                </div>

                </div>
                <div className="md:w-2/5">
                    <ExportedImage 
                        className="rounded-sm"
                        src={fff_1}
                        alt="" 
                        width={300} 
                        height={300}>
                    </ExportedImage>
                </div>
            </div>

            <br/>

            <h1 className="custom-subheading-2">
                How it works
            </h1>

            <div className="">
            Fun Food Finder is a web scraping application that, at a high level, 
            connects to a recipe webpage, parses the page for relevant information, 
            and then uses that data to filter out which recipes it displays to the user.

            </div>

            <br/>

            <div>
                First, the user inputs ‘filter’ information, such as allergies, dietary restrictions, 
                and ingredients they have on hand. Once they press ‘search,’ the program will connect to 
                a recipe webpage, in this case, the AllRecipes home page. The web scraping functionality 
                is accomplished with jsoup, which allows the program to fetch URLs to connect to web pages, 
                and then extract information from these pages. Next, the program will use the filters 
                inputted by the user to determine which branching web pages it needs to follow from the 
                AllRecipes home page.
            </div>

            <br/>

            <div>
                Once all relevant recipes are found, the app will sort and subsequently display the recipes 
                based on user preference (star rating, cook time, or calories). If the user decides to edit 
                their filters, all they need to do is press search again!
            </div>

            <br/>

            <div>
                Below is a screenshot of our Java GUI app!
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-sm"
                    src={fff_2}
                    alt="" 
                    width={800} 
                    height={800}>
                </ExportedImage>
            </div>
            </div>
        </section>
    </div>
  )
}
export default FFFinderSection
