import React from 'react';


const styles={
    HeaderBase:{
        letterSpacing:' -1px',
        fontFamily: 'Heebo',
        padding: '0',
        margin: '0 0 0.5rem',
    },
    H1:{
        lineHeight: '2.5rem',
        fontWeight: '900',
        fontSize: '3rem',
        margin: '0 0 1rem',
        padding: '0',
    
    },
    H2:{
        lineHeight: '2.5rem',
        fontWeight: '200',
        fontSize: '2.3rem',
        padding:'0',
        margin: '0 0 1rem',
    },
    H3:{
        lineHeight: '1.8rem',
        fontWeight: '800',
        fontSize: '1.65rem',
        padding:'0',
        margin: '0 0 1rem',
    },H4:{
        lineHeight: '1.5rem',
        fontWeight: '800',
        fontSize: '1.2rem',
        padding:'0',
        margin: '0 0 1rem',
    },

    PBase:{
        fontFamily: 'Heebo',
        margin: '0 0 .5rem',
        padding: 0,
        lineHeight: '1.3rem',
        fontSize: '1rem',
        fontWeight: 400
    },
    S:{
        fontWeight: '800',
        fontSize:' .8rem'
    },
    Warning:{
        fontWeight: '800',
        fontSize:' .8rem'
    }
}
 


export const H1 = (props) =>        (<h1 style={{...styles.HeaderBase, ...props.style, ...styles.H1}} className="Grey BorderRadius">{props.children}</h1>);
export const H2 = (props) =>        (<h2 style={{...styles.HeaderBase, ...props.style, ...styles.H2}} className="Grey BorderRadius bg-white">{props.children}</h2>);
export const H3 = (props) =>        (<h3 style={{...styles.HeaderBase, ...props.style, ...styles.H3}} className="Grey">{props.children}</h3>);
export const H4 = (props) =>        (<h4 style={{...styles.HeaderBase, ...props.style, ...styles.H4}} className="Grey">{props.children}</h4>);
export const H4_ERROR = (props) =>  (<h4 style={{...styles.HeaderBase, ...props.style, ...styles.H4}} className="Error">{props.children}</h4>);
export const P = (props) =>         (<p  style={{...styles.PBase, ...props.style}} className="Grey">{props.children}</p>);
export const P_ERROR = (props) =>   (<p  style={{...styles.PBase, ...props.style}} className="Error">{props.children}</p>);
export const P_WARNING = (props) => (<p  style={{...styles.PBase, ...props.style, ...styles.Warning}} className="Warning">{props.children}</p>);
export const S = (props) =>         (<p  style={{...styles.PBase, ...props.style, ...styles.S}} className="Grey"><small>{props.children}</small></p>);