import React from 'react'
import Slider from 'react-slick'
import img1 from '../../images/download (1).jpg'
import img2 from '../../images/download (2).jpg'
import img3 from '../../images/download.jpg'
import img4 from '../../images/images (1).jpg'
import img5 from '../../images/images (2).jpg'
import img6 from '../../images/images.jpg'
class Woman extends React.Component{
          constructor(){
               super()
          }
          render(){
                    var settings = {
                              dots: true,
                              infinite: true,
                              speed: 500,
                              slidesToShow: 3,
                              slidesToScroll: 1
                            }
                    return(
                              <div className="woman-container">
                              <p>Look the quintessential bride with our wide range of Lehengas. Adorn our well-crafted and detailed Lehengas and bask in the regal glory of our collections. A Lehenga is a form of skirt from the Indian subcontinent which is long and embroidered usually paired with a dupatta.</p>
                              <div className="woman-sub-container">
                              
                                              <Slider {...settings}>
                                                            <div><img src = {img1}/> </div>
                                                            <div> <img src = {img2}/></div>
                                                            <div> <img src = {img3}/></div>
                                                            <div> <img src = {img4}/></div>
                                                            <div> <img src = {img5}/></div>
                                                            <div> <img src = {img6}/></div>
                                                  </Slider>
                                        </div>
                              </div>
                    )
                    
          }
}
export default Woman