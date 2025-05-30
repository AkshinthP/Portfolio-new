import React from "react"

export const Services = ({ items, Heading }) => {
  return (
    <>
      <div className='about_services'>
        <Heading title='Skills' />
        <div className='about_services_boxs'>
          {items.serives.map((item, index) => (
            
              <div className='card' key={index}>
                <div className='icon'>
                  <span>{item.icon}</span>
                </div>
                <div className='text'>
                  <h3>{item.title}</h3>
                  <label>{item.text}</label>
                  <p>{item.decs}</p>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  )
}
