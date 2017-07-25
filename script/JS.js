'use strict'
const student = []
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form_add').addEventListener('submit', function (event) {
            event.preventDefault();
            /*let storage=window.localStorage;*/

            let i = {
                name: document.getElementsByName("Name")[0].value,//getElementsByName获取数组，要取出内部的值
                number: document.getElementsByName("Number")[0].value,
                family: document.getElementsByName("Family")[0].value,
                Class: document.getElementsByName("Class")[0].value,
                math: document.getElementsByName("Math")[0].value,
                Chinese: document.getElementsByName("Chinese")[0].value,
                English: document.getElementsByName("English")[0].value,
                Programing: document.getElementsByName("Programing")[0].value
            }
            //console.log(i.name);
            let j = JSON.stringify(i);
            // console.log(i);
            localStorage.setItem("student", j);
            console.log(localStorage.getItem("student"));
            let flag = true;
            for (let a = 0; a < student.length; a++) {
                if (student[a].name === i.name) {
                    flag = false;
                }
            }
            if (flag === true) {
                student.push(JSON.parse(localStorage.getItem("student")));
                localStorage.setItem("date", JSON.stringify(student));
                alert("保存成功！");
            } else {
                alert("该学生已经存在！");
            }
            //localStorage.setItem("date",JSON.stringify(student));
            //console.log(localStorage.getItem("date"));
        }
    )
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('search').addEventListener('submit', function (event) {
        event.preventDefault();
        let i = document.getElementsByClassName("search_number")[0].value;
        let s=[];
        s=JSON.parse(localStorage.getItem("date"))
        for (let item of s) {
            if()

        }
    })
});
/*
 function clickButton() {
 document.getElementById('Button1_add').click()
 document.getElementById('Button2_clear').click()
 document.getElementById('Button_search').click()
 }
 function alertMsg() {
 alert("保存成功!");
 let i=[{
 name:getElementById("Name"),
 number:getElementById("Number"),
 family:getElementById("Family"),
 Class:getElementById("Class"),
 math:getElementById("Math"),
 Chinese:getElementById("Chinese"),
 English:getElementById("English"),
 Programing:getElementById("Programing")
 }];
 student.push(i);
 console.log(i);
 return i;
 }
 function alertMsg2() {
 alert("清空成功!")
 }
 function alertMsg3() {
 alert("查询成功!")
 }*/

/*
 function inputInformation() {
 localStorage.name = "";
 }
 let storage = [];
 $.ajax({
 type: "get",
 async: "true",
 url: "",
 data: {},
 dataType: "jsonp",
 success: function (data) {
 if (data instanceof Array) {
 stroage.push(JSON.stringify(data[i])); //storage是外部定义的数组 storage = []
 }
 },
 error: function () {
 }
 });

 function getData() {
 window.localStorage.job = JSON.stringify(storage); //将storage转变为字符串存储
 var job = JSON.parse(window.localStorage.job);
 for (var i = 0; i < job.length; i++) {
 job[i] = JSON.parse(job[i]);
 }
 //此时job中存储的就是对象数组了
 }*/
