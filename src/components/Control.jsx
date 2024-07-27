import { useStore } from "../store/useStore";

const Control = () => {
  const { updateColumnMaster, updateLayoutMaster } = useStore((state) => ({
    updateColumnMaster: state.updateColumnMaster,
    updateLayoutMaster: state.updateLayoutMaster,
  }));
  return (
    <div>
      <button onClick={updateColumnMaster}>Column</button>
      <button onClick={updateLayoutMaster}>Layout</button>
    </div>
  );
};
export default Control;
