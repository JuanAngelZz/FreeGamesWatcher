export const removeDuplicates = (array = []) => {
  return array.filter((element, index) => array.indexOf(element) === index);
};
