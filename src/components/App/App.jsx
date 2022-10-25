import { useEffect, useState } from "react";

import { mockGetDirections, mockGetFilters } from "../../api/api";
import { ConvertInput } from "../ConvertInput.jsx/ConvertInput";
import "./App.scss";

function App() {
  const [convertData, setConvertData] = useState({})

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
    <div className="container">
      <ConvertInput />
    </div>
  )
}

export default App;
