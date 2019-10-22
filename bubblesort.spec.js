describe("Bubble Sort", function() {
  let array;
  beforeEach(function() {
    array = [8, 7, 3, 1, 4, 6];
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("returns an array of equal length", function() {
    expect(bubbleSort(array).length).toEqual(array.length);
  });
  it("returns the array in ascending order", function() {
    expect(bubbleSort(array)).toEqual([1, 3, 4, 6, 7, 8]);
  });
  // it("does not call the sort prototype function", function() {
  //   spyOn(Array, "sort");
  //   expect(array.sort.calls.count()).toEqual(0);
  // });
  // it("calls itself recursively", function() {
  //   spyOn(bubbleSort, "bubbleSort");
  //   expect(bubbleSort).toHaveBeenCalled();
  // });
});
