export const newsResponce = (responceData) => {
    return (dispatch) => {
        dispatch({
            type : "responce",
            payload : responceData
        })
    }
  };