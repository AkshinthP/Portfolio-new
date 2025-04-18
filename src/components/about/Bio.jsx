import React from "react"
export const Bio = ({ items, Heading }) => {
  return (
    <>
      <Heading title='Short Bio' />
      <div className='about_details_bio'>
        {items.bio.map((val,index) => (
          
            <div className='about_details_bio_box' key={index}>
              <div className='about_details_bio_box_item'>
                <p>{val.para1}</p>
              </div>
              <div className='about_details_bio_box_item'>
                <p>{val.para2}</p>
              </div>
              <div className='about_details_bio_box_item'>
                <p>{val.para3}</p>
              </div>
              <div className='about_details_bio_box_item'>
              <p>Food Recipe app - source code:</p>
              <a href="https://github.com/AkshinthP/Food-Recipes.git" target="_blank" rel="noopener noreferrer">
              <p style={{color:"lightblue"}}>https://github.com/AkshinthP/Food-Recipes.git</p>
              </a>

              
              <p>Kerala Tourism website - source code:</p>
              <a href="https://github.com/AkshinthP/Tourismkerala.git" target="_blank" rel="noopener noreferrer">
              
               <p style={{color:"lightblue"}}>https://github.com/AkshinthP/Tourismkerala.git</p>
              </a>
           
              </div>
            </div>
        ))}
      </div>
    </>
  )
}
