const restoreGrid = (gridView, dataProvider) => {
  dataProvider.clearRows();
  gridView.destroy();
  dataProvider.destroy();
};
