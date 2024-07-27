import React, { useRef, useEffect } from "react";
import { useStore } from "../store/useStore";

const Detailed = () => {
  const gridRef = useRef();
  const { init, restore } = useStore((state) => ({
    init: state.initDetail,
    restore: state.restoreDetail,
  }));

  useEffect(() => {
    if (!gridRef.current) return;
    init(gridRef);
    return () => {
      restore();
    };
  }, []);

  return <div ref={gridRef} style={{ width: "800px", height: "300px" }} />;
};
export default Detailed;
