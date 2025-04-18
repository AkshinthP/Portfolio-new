import React from "react"
import { Heading } from "../../common/Heading"
import { about } from "../../data/data"
import { Bio } from "./Bio"
import { Info } from "./Info"
import { Services } from "./Services"
import { Slider } from "./Slider"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
          {about.map((items,index) => {
            return (
              <React.Fragment key={index}>
                <div className='about_details'>
                  <Info items={items} Heading={Heading} />
                  <Bio items={items} Heading={Heading} />
                </div>
                <Services items={items} Heading={Heading} />
                <Slider items={items} Heading={Heading} />
               
              </React.Fragment>

            )
          })}
        </div>
      </section>
    </>
  )
}
