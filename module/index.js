var student=require("./student");
var Klass=require("./class");
var teacher=require("./teacher");

var student1=student.add("allen","boy","20");

var student2=student.add("lucas","girl","18");
var teacher1=teacher.add("vincent","male","25");
var teacher2=teacher.add("lucy","female","25");

var students=[];
students.push(student1);
students.push(student2);

Klass.add(teacher1,students);
Klass.add(teacher2,students);






