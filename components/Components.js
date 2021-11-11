import Componentsstyles from "../styles/Components.module.css";
import { H1, H2, H3, H4, P,P_ERROR, S} from "./type";

import {ClearButton} from "./buttons"

const Components = ()=>{

    return(
        <section className={Componentsstyles.Section}>
                <Copy />
                <ClearButton />
        </section>
    )
}

export default Components;
const Copy = ()=>{
    return (<>
                <H1>Header 1</H1>
                        <H2>Header 2</H2>
                        <H3>Header 3</H3>
                        <H4>Header 4</H4>
                        <P>Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph</P>
                        <P_ERROR>Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph</P_ERROR>
                        <S>Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph</S>
            </>
    )
}