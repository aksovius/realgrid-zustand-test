var detailData = [
  {
    OrderID: "10248",
    ProductName: "Queso Cabrales",
    UnitPrice: 14,
    Quantity: 12,
  },
  {
    OrderID: "10248",
    ProductName: "Singaporean Hokkien Fried Mee",
    UnitPrice: 9.8,
    Quantity: 10,
  },
  {
    OrderID: "10248",
    ProductName: "Mozzarella di Giovanni",
    UnitPrice: 34.8,
    Quantity: 5,
  },
  { OrderID: "10249", ProductName: "Tofu", UnitPrice: 18.6, Quantity: 9 },
  {
    OrderID: "10249",
    ProductName: "Manjimup Dried Apples",
    UnitPrice: 42.4,
    Quantity: 40,
  },
  {
    OrderID: "10250",
    ProductName: "Jack's New England Clam Chowder",
    UnitPrice: 7.7,
    Quantity: 10,
  },
  {
    OrderID: "10250",
    ProductName: "Manjimup Dried Apples",
    UnitPrice: 42.4,
    Quantity: 35,
  },
  {
    OrderID: "10250",
    ProductName: "Louisiana Fiery Hot Pepper Sauce",
    UnitPrice: 16.8,
    Quantity: 15,
  },
  {
    OrderID: "10251",
    ProductName: "Gustaf's Knäckebröd",
    UnitPrice: 16.8,
    Quantity: 6,
  },
  {
    OrderID: "10251",
    ProductName: "Ravioli Angelo",
    UnitPrice: 15.6,
    Quantity: 15,
  },
  {
    OrderID: "10251",
    ProductName: "Louisiana Fiery Hot Pepper Sauce",
    UnitPrice: 16.8,
    Quantity: 20,
  },
  {
    OrderID: "10252",
    ProductName: "Sir Rodney's Marmalade",
    UnitPrice: 64.8,
    Quantity: 40,
  },
  { OrderID: "10252", ProductName: "Geitost", UnitPrice: 2, Quantity: 25 },
  {
    OrderID: "10252",
    ProductName: "Camembert Pierrot",
    UnitPrice: 27.2,
    Quantity: 40,
  },
  {
    OrderID: "10253",
    ProductName: "Gorgonzola Telino",
    UnitPrice: 10,
    Quantity: 20,
  },
  {
    OrderID: "10253",
    ProductName: "Chartreuse verte",
    UnitPrice: 14.4,
    Quantity: 42,
  },
];
var columns = [
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

var fields = [
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
export { detailData, columns, fields };
