import { create } from "zustand";
import { GridView, LocalDataProvider } from "realgrid";
import {
  columns as columnsM,
  fields as fieldsM,
  layout,
  layout2,
  masterData,
} from "../data/master";
import {
  detailData,
  columns as columnsD,
  fields as fieldsD,
} from "../data/detailed";
import { restoreGrid } from "../utils/gridUtils";

export const useStore = create((set, get) => ({
  gridViewM: null,
  gridViewD: null,
  dataProviderM: new LocalDataProvider(),
  dataProviderD: new LocalDataProvider(),

  setGridViewM: (ref) => {
    const gridView = new GridView(ref.current);
    gridView.setDataSource(get().dataProviderM);
    set({ gridViewM: gridView });
  },
  setGridViewD: (ref) => {
    const gridView = new GridView(ref.current);
    gridView.setDataSource(get().dataProviderD);
    set({ gridViewD: gridView });
  },

  initMaster: (ref) => {
    console.log("initMaster");
    get().setGridViewM(ref);
    const { gridViewM, dataProviderM } = get();
    gridViewM.setColumns(columnsM);
    gridViewM.onCurrentRowChanged = get().onCurrentRowChangedM;
    dataProviderM.setFields(fieldsM);
    dataProviderM.setRows(masterData);
    gridViewM.editOptions.editable = true;
  },

  restoreDetail: () => {
    console.log("restoreDetail");
    const { gridViewD, dataProviderD } = get();
    restoreGrid(gridViewD, dataProviderD);
    set({
      gridViewD: null,
      dataProviderD: new LocalDataProvider(),
    });
  },
  restoreMaster: () => {
    console.log("restoreMaster");
    const { gridViewM, dataProviderM } = get();
    restoreGrid(gridViewM, dataProviderM);
    set({
      gridViewM: null,
      dataProviderM: new LocalDataProvider(),
    });
  },
  initDetail: (ref) => {
    console.log("initDetail");
    get().setGridViewD(ref);
    const { gridViewD, dataProviderD } = get();
    gridViewD.setColumns(columnsD);
    dataProviderD.setFields(fieldsD);
    gridViewD.footer.visible = true;
  },

  onCurrentRowChangedM: (grid, oldRow, masterRow) => {
    const { dataProviderD } = get();
    dataProviderD.clearRows();
    if (masterRow >= 0) {
      const mstKey = grid.getValue(masterRow, "OrderID");
      const datas = detailData.filter((element) => element.OrderID === mstKey);
      dataProviderD.setRows(datas);
    }
  },

  updateColumnMaster: () => {
    const { gridViewM } = get();
    const columns = gridViewM.getColumns();
    const newColumns = columns.map((column) => {
      if (column.name === "OrderDate") {
        column.header.text = "New Order Date";
      }
      return column;
    });
    console.log(columns);
    gridViewM.setColumns(newColumns);
  },

  updateLayoutMaster: () => {
    const { gridViewM } = get();
    gridViewM.setColumnLayout(layout2);
    // get().dataProviderM.setRows(masterData);
  },
}));
