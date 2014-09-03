/*
 * JSON
 *     Ajax使用JSON
 *         parse():2个参数,与eval()不同的时不需要传入圆括号
 *             JSON文本
 *             可选的过滤函数
 *                 JSON键和值为参数
 *                 返回值为结果对象关联的值，为重写默认的解析机制提供机会
 */

//对象字面量表示对象
{
    "name": "Nicholas C. Zakas",
    "title": "Software Engineer",
    "author": true,
    "age": 29
}

//可以直接赋值
var person = {
    "name": "Nicholas C. Zakas",
    "title": "Software Engineer",
    "author": true,
    "age": 29
};

//数组字面量表示数组
[1, 2, "color", true, null]

//描述人的对象数组
[
    {
        "name": "Nicholas C. Zakas",
        "title": "Software Enginner",
        "author": true,
        "age": 29
    },
    {
        "name": "Jim Smith", 
        "title": "Salesperson",
        "author": false,
        "age": 35
    }
]

//这些定义都是纯文本，传递给eval()解析返回实例
//求值为一个数组
var people = eval(jsonText);

//访问数据
alert(people[0].name);
people[1].age = 36;
if (people[0].author) {
    alert(people[0].name + " is an author");
}

//将输入的文本放在圆括号中，防止出错
var object = eval("(" + jsonText + ")");

var object = JSON.parse("{}");

var jsonText = "{\"name\":\"Nicholas C. Zakas\", \"age\":29, \"author\":true }";
var object = JSON.parse(jsonText, function(key, value) {
    switch(key) {
        case "age": return value + 1;
        case "author": return undefined;
        default: return value;
    }
});

alert(object.age);    //30
alert(object.author);    //undefined
