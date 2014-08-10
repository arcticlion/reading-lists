/*
 * 范围
 * DOM范围实现简单选择
 * selectNode()或selectNodeContents()
 * 接受一个参数: DOM节点
 * <html>
 *     <body>
 *         <p id="p1"><b>Hello</b> world!</p>
 *     </body>
 * </html>
 * selectNode()选择包括子节点的整个节点
 * selectNodeContents()只选择子节点
 * ++++++++++++++range1+++++++++++++
 * +                               +
 * <p id="p1"><b>Hello</b> world!</p>
 *            |                 |
 *            +++++++range2++++++
 */
var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById("p1");
range1.selectNode(p1);
range2.selectNodeContents(p1);

