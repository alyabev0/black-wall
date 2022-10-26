import { useEffect, useState } from "react";

import { getDirections, getFilters } from "../../api/api";
import { MainForm } from "../MainForm/MainForm";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { directionsReceived, increment } from "../../store/toolkitSlice";

function App() {
  const directionsState = useSelector(state => state.toolkit.directions)
  const dispatch = useDispatch()


  const clickHandler = () => {
    dispatch(increment())
  }

  useEffect(() => {
    const getData = async () => {
      const directions = await getDirections();
      const filters = await getFilters()
      // setConvertData({
      //   directions,
      //   filters
      // })
      dispatch(directionsReceived(directions))
      // dispatch(increment())
    }
    getData()
  }, [])

  return (
    <div className="container" onClick={clickHandler}>
      <MainForm />
    </div>
  )
}

export default App;
