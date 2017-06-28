// If life were easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:

var getElementsByClassName = function(targetClassName, node) {
  var nodesResultArr = [];
  node = node || document.body;

  // Base case: does the node have classList?
      // if yes, does it have the target className?
        // if yes, then add that node to the result of nodes w/ the targetClassName.
        // if no node w/ targetClassName, no children, then return [].
     // if no, node doesn't have the className, then does the node have children.
       // if the node does, then recurse. check the node's children and so on.
         // concat all nodes pushed to the result array of nodes so it's one result array. re-assign it to original nodes result array.

  // Other option if not using classList.
  // if (node.className && node.className.includes(targetClassName)) {
  //   nodes.push(node);
  // }

  if (node.classList && node.classList.contains(targetClassName)) {
    nodesResultArr.push(node);
  }

  // does the node have children, then recurse.
    // only looking at node's element nodes, so using children property to exclude text and comment nodes and not childNodes property.

  for (var i = 0; i < node.children.length; i++) {
    var childNode = getElementsByClassName(targetClassName, node.children[i]);
    nodesResultArr = nodesResultArr.concat(childNode);
  }
  return nodesResultArr;
};
