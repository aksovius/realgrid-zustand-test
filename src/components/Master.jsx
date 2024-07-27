import { useEffect, useRef, useState } from "react";
import { useStore } from "../store/useStore";

const Master = () => {
  const gridRef = useRef();
  const { init, restore } = useStore((state) => ({
    init: state.initMaster,
    restore: state.restoreMaster,
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

export default Master;
