import store from '../store/index';
/// FOrm REGX

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const ValidateNumberOnly = (email) => {
    const re = /^\d+$/;
    return re.test(String(email).toLowerCase());
}

export const isEmpty = (STR)=>{

    console.log('isEmpty', String(STR))
        if(!STR|| String(STR).match(/^ *$/) !== null)
            return true
                return false
        
}

export const FindDivision = (ID) => {
    const { Divisions } = store.getState().SJWCA;
    return find(Divisions, function (o) {
      return o.id === ID;
    });
  };