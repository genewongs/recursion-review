// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  // declare a result array, this is our return value
  var node = node || document.body;
  var result = [];
  // crate edge case, if input is invalid, return empty array.
  // if the element has classname, push the current element into the result array and return res

  // if(node.classList.length !== 0) {
  //   if(node.classList.contains(className)) {
  //     result.push(node);
  //   }
  // }
  var nodeClass = node.classList;
  console.log(node.hasChildNodes())

  if(nodeClass.length >= 1 && nodeClass.contains(className)) {
    result.push(node);
  }

  if (node.hasChildNodes()) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      result.concat(getElementsByClassName(className, children[i]))
    }
  }
  //if it has children, iterate all the children to find the classname - recursively call the function on each child
  //traverse the body if there is children
  console.log(result);
  return result;
};
