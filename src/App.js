import { useState } from "react";
import Master from "./components/Master";
import Detailed from "./components/Detailed";
import "realgrid/dist/realgrid-style.css";
function App() {
  const [master, setMaster] = useState({});
  const [detail, setDetail] = useState({});

  return (
    <div>
      <Master setMaster={setMaster} detail={detail} />
      <Detailed setDetail={setDetail} />
    </div>
  );
}

export default App;
