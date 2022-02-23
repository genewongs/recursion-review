// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var node = node || document.body;
  var result = [];
  var nodeClass = node.classList;
  if (nodeClass !== undefined) {
    if (nodeClass.contains(className)) {
      result.push(node);
    }
  }
  if (node.hasChildNodes()) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      result = result.concat(getElementsByClassName(className, children[i]))
    }
  }
  return result;
};