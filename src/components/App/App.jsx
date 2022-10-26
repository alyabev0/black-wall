import { useEffect, useState } from "react";

import { getDirections, getFilters } from "../../api/api";
import { MainForm } from "../MainForm/MainForm";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { directionsReceived, filtersReceived } from "../../store/dataSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const directions = await getDirections();
      dispatch(directionsReceived(directions))

      const filters = await getFilters()
      dispatch(filtersReceived(filters))

    }
    getData()
  }, [])

  return (
    <div className="container">
      <MainForm />
    </div>
  )
}

export default App;
