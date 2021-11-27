
import Splitterstyles from "../../styles/LandingPage/Splitter.module.css";
const SplitterBottom = ({color})=>{
    return(
        <div class={Splitterstyles.custom_shape_divider_bottom_1637977908}>
            <svg  viewBox="0 0 1200 120" preserveAspectRatio="none" fill={color}>
            <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
            </svg>
        </div>
    )
}

export default SplitterBottom;