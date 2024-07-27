import { useEffect, useRef, useState } from "react";
import { useStore } from "../store/useStore";

const Master = () => {
  const gridRef = useRef();
  const { init } = useStore((state) => ({
    init: state.initMaster,
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

export default Master;
