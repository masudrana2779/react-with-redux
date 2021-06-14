export const depositMoney =(amount) => {
    console.log(amount)
    return(dispatch) => {
        dispatch({
            type:"deposit",
            payload: {
                a: amount
            }
        })
    }
}

export const withdrawMoney = (amount) => {
    return(dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}