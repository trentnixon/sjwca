import React from 'react';


const styles={
    HeaderBase:{},
    H1:{},
    H2:{},
    H3:{},
    H4:{},
    PBase:{},
    S:{},
    Warning:{}
}
 


export const H1 = (props) =>        (<h1 style={{...styles.HeaderBase, ...props.style, ...styles.H1}} className="">{props.children}</h1>);
export const H2 = (props) =>        (<h2 style={{...styles.HeaderBase, ...props.style, ...styles.H2}} className="">{props.children}</h2>);
export const H3 = (props) =>        (<h3 style={{...styles.HeaderBase, ...props.style, ...styles.H3}} className="">{props.children}</h3>);
export const H4 = (props) =>        (<h4 style={{...styles.HeaderBase, ...props.style, ...styles.H4}} className="">{props.children}</h4>);
export const H4_ERROR = (props) =>  (<h4 style={{...styles.HeaderBase, ...props.style, ...styles.H4}} className="Error">{props.children}</h4>);
export const P = (props) =>         (<p  style={{...styles.PBase, ...props.style}} className="">{props.children}</p>);
export const P_ERROR = (props) =>   (<p  style={{...styles.PBase, ...props.style}} className="Error">{props.children}</p>);
export const P_WARNING = (props) => (<p  style={{...styles.PBase, ...props.style, ...styles.Warning}} className="Warning">{props.children}</p>);
export const S = (props) =>         (<p  style={{...styles.PBase, ...props.style, ...styles.S}} className=""><small>{props.children}</small></p>);