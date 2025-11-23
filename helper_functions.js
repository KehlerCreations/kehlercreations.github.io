export const CreateElement = function(element_type, parent) {
  let newElement = document.createElement(element_type);
  parent.append(newElement);
  return newElement;
}