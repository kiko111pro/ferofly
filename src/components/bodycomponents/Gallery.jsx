import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./bodystyles.css"
import { Carousel } from "react-responsive-carousel";

function Gallery() {
  return (
    <div className="gallery my-5">
      <h1>Gallery</h1>
      <Carousel autoPlay >
        
        <div className="gallery_container d-flex flex-wrap justify-content-between">
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.jpg/v1/fill/w_347,h_522,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.webp"
          />
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.jpg/v1/fill/w_371,h_522,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.webp"
          />
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.jpg/v1/fill/w_783,h_522,al_c,q_85,usm_0.66_1.00_0.01/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.webp"
          />
        </div>

        <div className="d-flex gallery_container justify-content-between">
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.jpg/v1/fill/w_442,h_522,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.webp"
          />
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_348,h_522,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp"
          />
          <img
          className='m-3 img-responsive'
            alt=""
            src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_348,h_522,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp"
          />
        </div>
        
      </Carousel>
    </div>
  );
}

export default Gallery;
