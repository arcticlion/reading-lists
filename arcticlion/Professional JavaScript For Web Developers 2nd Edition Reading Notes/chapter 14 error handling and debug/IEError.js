/*
 * 常见的IE错误
 *     操作终止
 */

//下面示例导致操作终止错误
<html>
<head>
    <title>Operation Aborted Example</title>
</head>
<body>
    <p>The following code should cause an Operation Aborted error in IE versions prior to 8.</p>
    <div>
        <script type="text/javascript">
            document.body.appendChild(document.createElement("div");
        </script>
    </div>
</body>
</html>

