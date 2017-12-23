/**
 * Created by zlf on 2017/12/16.
 */
function add(name,sex,age){
    //添加一个老师
    console.info("新增老师||姓名:%s 性别:%s 年龄%s",name,sex,age)

    return {
        name:name,
        sex:sex,
        age:age
    }
}
exports.add=add;