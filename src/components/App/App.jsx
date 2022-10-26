import { useEffect, useState } from "react";

import { mockGetDirections, mockGetFilters } from "../../api/api";
import { ConvertInput } from "../ConvertInput.jsx/ConvertInput";
import { Title } from "../Title/Title";
import { MainForm } from "../MainForm/MainForm";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [convertData, setConvertData] = useState({})
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch()


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
    <div className="container" onClick={() => console.log(count)}>
      {/* <Title />
      <ConvertInput /> */}
      <MainForm />
    </div>
  )
}

export default App;
