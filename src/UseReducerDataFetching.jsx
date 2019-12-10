import React, { useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: `something went wrong ${action.payload}`
      };
    default:
      return state;
  }
};
const UseReducerDataFetching = () => {
  const initialState = {
    loading: true,
    post: {},
    error: ""
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ERROR", payload: err });
      });
  }, []);
  return (
    <>
      {state.loading ? "Loading ..." : state.post.title}
      {state.error ? state.error : null}
    </>
  );
};

export default UseReducerDataFetching;
