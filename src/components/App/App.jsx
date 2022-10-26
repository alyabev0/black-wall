import { useEffect, useState } from "react";

import { mockGetDirections, mockGetFilters } from "../../api/api";
import { MainForm } from "../MainForm/MainForm";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/toolkitSlice";

function App() {
  const [convertData, setConvertData] = useState({})
  const state = useSelector(state => state)
  const dispatch = useDispatch()


  const clickHandler = () => {
    console.log(state)
    dispatch(increment())
    console.log(state)
  }

  useEffect(() => {
    const getData = async () => {
      const directions = await mockGetDirections();
      const filters = await mockGetFilters()
      setConvertData({
        directions,
        filters
      })
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
