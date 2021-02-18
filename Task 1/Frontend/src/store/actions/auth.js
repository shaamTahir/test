export const actionTypes = {
  AUTHENTICATION: "AUTHENTICATION",
};

const baseUrl = "";

export const login = (email, password, endpoint) => async (dispatch) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!response.ok) {
    const resDataError = await response.json();
    throw new Error(resDataError);
  }
  const resData = await response.json();

  dispatch({
    type: actionTypes.AUTHENTICATION,
    payload: resData,
  });
};

export const signup = (email, password, endpoint) => async (dispatch) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!response.ok) {
    const resDataError = await response.json();
    throw new Error(resDataError);
  }

  const resData = await response.json();

  dispatch({
    type: actionTypes.AUTHENTICATION,
    payload: { userId: resData.data.id, token: resData.token },
  });
};
