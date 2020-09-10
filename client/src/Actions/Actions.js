const loadActivities = (data) => ({
  type: "LOAD_ACTIVITIES",
  payload: data,
});

const loadName = (data) => ({
  type: "LOAD_NAME",
  payload: data,
});

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: localStorage.user,
        },
      };
      const resp = await fetch(`http://localhost:3000/dashboard`, options);
      const habit = await resp.json();
      dispatch(loadActivities(habit));
    } catch (err) {
      throw new Error(err.messsage);
    }
  };
};

export const getName = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: localStorage.user,
        },
      };
      const resp = await fetch(`http://localhost:3000/dashboard/name`, options);
      const name = await resp.json();
      dispatch(loadName(name));
    } catch (err) {
      throw new Error(err.messsage);
    }
  };
};

export const deleteHabit = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          token: localStorage.user,
        },
      };
      const resp = await fetch(`http://localhost:3000/dashboard/`, options);
      const hab = await resp.json();
      dispatch(habitdelete(hab));
    } catch (err) {
      throw new Error(err.messsage);
    }
  };
};

export const completeHabit = (id) => ({ type: "complete_habit", payload: id });
