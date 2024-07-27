var fields = [
  {
    fieldName: "OrderID",
  },
  {
    fieldName: "CustomerID",
    dataType: "text",
  },
  {
    fieldName: "CompanyName",
    dataType: "text",
  },
  {
    fieldName: "EmployeeID",
    dataType: "number",
  },
  {
    fieldName: "OrderDate",
    dataType: "datetime",
  },
  {
    fieldName: "ShipName",
    dataType: "text",
  },
  {
    fieldName: "ShipAddress",
    dataType: "text",
  },
  {
    fieldName: "ShipCity",
    dataType: "text",
  },
  {
    fieldName: "ShipCountry",
    dataType: "text",
  },
];

var columns = [
  {
    name: "OrderID",
    fieldName: "OrderID",
    width: "60",
    header: {
      text: "OrderID",
    },
  },
  {
    name: "CustomerID",
    fieldName: "CustomerID",
    width: "60",
    header: {
      text: "CustomerID",
    },
  },
  {
    name: "CompanyName",
    fieldName: "CompanyName",
    width: "100",
    header: {
      text: "CompanyName",
    },
  },
  {
    name: "EmployeeID",
    fieldName: "EmployeeID",
    width: "50",
    header: {
      text: "EmployeeID",
    },
  },
  {
    name: "OrderDate",
    fieldName: "OrderDate",
    width: "80",
    editor: {
      type: "date",
    },
    header: {
      text: "OrderDate",
      styleName: "orange-column",
    },
    datetimeFormat: "yyyy-MM",
  },
  {
    name: "ShipName",
    fieldName: "ShipName",
    width: "80",
    header: {
      text: "ShipName",
    },
  },
  {
    name: "ShipAddress",
    fieldName: "ShipAddress",
    width: "120",
    header: {
      text: "ShipAddress",
    },
  },
  {
    name: "ShipCity",
    fieldName: "ShipCity",
    width: "80",
    header: {
      text: "ShipCity",
    },
  },
  {
    name: "ShipCountry",
    fieldName: "ShipCountry",
    width: "80",
    header: {
      text: "ShipCountry",
    },
  },
];

var masterData = [
  [
    "10248",
    "VINET",
    "Vins et alcools Chevalier",
    "5",
    "1996-07-04",
    "Vins et alcools Chevalier",
    "59 rue de l'Abbaye",
    "Reims",
    "France",
  ],
  [
    "10249",
    "TOMSP",
    "Toms Spezialitäten",
    "6",
    "1996-07-05",
    "Toms Spezialitäten",
    "Luisenstr. 48",
    "Münster",
    "Germany",
  ],
  [
    "10250",
    "HANAR",
    "Hanari Carnes",
    "4",
    "1996-07-08",
    "Hanari Carnes",
    "Rua do Paço, 67",
    "Rio de Janeiro",
    "Brazil",
  ],
  [
    "10251",
    "VICTE",
    "Victuailles en stock",
    "3",
    "1996-07-08",
    "Victuailles en stock",
    "2, rue du Commerce",
    "Lyon",
    "France",
  ],
  [
    "10252",
    "SUPRD",
    "Suprêmes délices",
    "4",
    "1996-07-09",
    "Suprêmes délices",
    "Boulevard Tirou, 255",
    "Charleroi",
    "Belgium",
  ],
  [
    "10253",
    "HANAR",
    "Hanari Carnes",
    "3",
    "1996-07-10",
    "Hanari Carnes",
    "Rua do Paço, 67",
    "Rio de Janeiro",
    "Brazil",
  ],
];

export { fields, columns, masterData };
