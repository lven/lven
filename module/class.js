function add(teacher,students){
    //添加一个班级
    console.info("一个新的班级被创建");
    console.info("班级老师为",teacher.name);
    var studentListStr="班级学生有";
    for(var item in students){
        studentListStr+=students[item].name+" ";
    }
    console.info(studentListStr)
}

exports.add=add;