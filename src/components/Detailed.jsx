import React, { useRef, useEffect } from "react";
import { useStore } from "../store/useStore";

const Detailed = () => {
  const gridRef = useRef();
  const { init } = useStore((state) => ({
    init: state.initDetail,
  }));

  useEffect(() => {
    if (!gridRef.current) return;
    init(gridRef);
    return () => {
      gridRef.current = null;
    };
  }, []);

  return <div ref={gridRef} style={{ width: "800px", height: "300px" }} />;
};
export default Detailed;
