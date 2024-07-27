import React, { useRef, useEffect } from "react";
import RealGrid, { GridView, LocalDataProvider } from "realgrid";

const Detailed = ({ setDetail }) => {
  const gridRef = useRef();

  useEffect(() => {
    if (!gridRef.current) return;
    const detailProvider = new RealGrid.LocalDataProvider();
    const detailGrid = new RealGrid.GridView(gridRef.current);

    detailGrid.setDataSource(detailProvider);
    detailProvider.setFields(fields1);
    detailGrid.setColumns(columns1);

    //Default was false, but changed to true
    detailGrid.footer.visible = true;
    setDetail({
      detailProvider,
      detailGrid,
    });
    return () => {
      detailProvider.clearRows();
      detailGrid.destroy();
      detailProvider.destroy();
      setDetail({});
    };
  }, [gridRef]);
  return <div ref={gridRef} style={{ width: "800px", height: "400px" }} />;
};
export default Detailed;
var columns1 = [
  {
    name: "OrderID",
    fieldName: "OrderID",
    header: "OrderID",
    width: 70,
    editable: false,
    readOnly: true,
    numberFormat: "0",
  },
  {
    name: "ProductName",
    fieldName: "ProductName",
    required: true,
    requiredLevel: "info",
    requiredMessage: "ProductName는 반드시 입력해야 합니다.",
    header: "ProductName",
    width: 200,
  },
  {
    name: "UnitPrice",
    fieldName: "UnitPrice",
    editor: {
      type: "number",
    },
    editable: true,
    editButtonVisibility: "always",
    header: {
      text: "UnitPrice",
      styleName: "orange-column",
    },
    numberFormat: "#,##0",
  },
  {
    name: "Quantity",
    fieldName: "Quantity",
    header: "Quantity",
    numberFormat: "#,##0",
  },
];

var fields1 = [
  {
    fieldName: "OrderID",
  },
  {
    fieldName: "ProductName",
    dataType: "text",
  },
  {
    fieldName: "UnitPrice",
    dataType: "number",
  },
  {
    fieldName: "Quantity",
    dataType: "number",
  },
];
