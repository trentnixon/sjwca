import { P_ERROR } from "../type"


export const EmailError = (VAILD)=>{
    if(VAILD.Email.length != 0)
    return( <>{ VAILD.Valid ? '': <P_ERROR>Email Address is Invalid</P_ERROR>}</> )
    return true
}


export const NumberError = (VAILD)=>{
    if(VAILD.Number.length != 0)
    return( <>{ VAILD.Valid ? '': <P_ERROR>Contact Number is Invalid</P_ERROR>}</> )
    return true
}