
import ImageGroupStyles from "../../styles/Structure/ImageGroup.module.css";

import Image from 'next/image'
import { H2} from "../type";
const IconGroup = ()=>{

    const ImgSize = (size)=>{ return size/2}

    return(
        <div className={`${ImageGroupStyles.SupportedGroup}`}>
            <H2>Proudly supported by:</H2>
            <div className={`${ImageGroupStyles.Group}`}>
                
                   
                         <Image
                        
                        src="/images/logos/MyCricket.png"
                        alt="Picture of the author"
                        width={ImgSize(195)}
                        height={ImgSize(250)}
                        />
                         <Image
                            src="/images/logos/cricketnsw.png"
                            alt="Picture of the author"
                            width={ImgSize(225)}
                            height={ImgSize(250)}
                        />
            </div>
        </div>
    )
}

export default IconGroup;
/*
 <Image
                        
                        src="/images/logos/PlayCricket.png"
                        alt="Picture of the author"
                        width={ImgSize(243)}
                        height={ImgSize(250)}
                    
                        />
*/