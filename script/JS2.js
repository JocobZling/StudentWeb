'use strict';
//const student = [];
//增加
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form_add').addEventListener('submit', function (event) {
            event.preventDefault();
            let i = {
                name: document.getElementsByName("Name")[0].value,//getElementsByName获取数组，要取出内部的值
                number: document.getElementsByName("Number")[0].value,
                family: document.getElementsByName("Family")[0].value,
                Class: document.getElementsByName("Class")[0].value,
                math: document.getElementsByName("Math")[0].value,
                Chinese: document.getElementsByName("Chinese")[0].value,
                English: document.getElementsByName("English")[0].value,
                Programing: document.getElementsByName("Programing")[0].value,
                sum: parseFloat(document.getElementsByName("Math")[0].value) + parseFloat(document.getElementsByName("Chinese")[0].value) + parseFloat(document.getElementsByName("English")[0].value) + parseFloat(document.getElementsByName("Programing")[0].value),
                ave: (parseFloat(document.getElementsByName("Math")[0].value) + parseFloat(document.getElementsByName("Chinese")[0].value) + parseFloat(document.getElementsByName("English")[0].value) + parseFloat(document.getElementsByName("Programing")[0].value)) / 4
            };
            let student = [];
            student = JSON.parse(localStorage.getItem("date"));
            let j = JSON.stringify(i);
            localStorage.setItem("student", j);
            console.log(localStorage.getItem("student"));
            let flag = true;
            console.log(student);
            if (student != null) {
                for (let a = 0; a < student.length; a++) {
                    if (student[a].number === i.number) {
                        flag = false;
                    }
                }
                if (flag === true) {
                    student.push(JSON.parse(localStorage.getItem("student")));
                    localStorage.setItem("date", JSON.stringify(student));
                    layer.msg('保存成功', {icon: 1});
                    //alert("保存成功！");
                } else {
                    layer.msg('该学生已经存在！', {icon: 0});
                    //alert("该学生已经存在！");
                }
                console.log(localStorage.getItem("date"));
            }
            else {
                student = [];
                student.push(JSON.parse(localStorage.getItem("student")));
                localStorage.setItem("date", JSON.stringify(student));
                layer.msg('保存成功', {icon: 1});
                //alert("保存成功！");
            }
        }
    )
});
//显示
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form_search').addEventListener('submit', function (event) {
        event.preventDefault();
        $(".printstudentto").remove();//清空
        let i = document.getElementsByName("search_number")[0].value;
        let j = i.split(",");
        console.log(j.length);//1
        console.log(j);//[""]
        let s = [];
        let showList = document.getElementById('printstudent');
        //console.log(showList);
        s = JSON.parse(localStorage.getItem("date"));
        if (j[0] == "") {
            // console.log("1111111");
            for (let a = 0; a < s.length; a++) {
                let list = document.createElement("tr");
                list.setAttribute("class", "printstudentto");//setAttribute() 方法创建或改变某个新属性。
                let item1 = document.createElement("td");
                let item2 = document.createElement("td");
                let item3 = document.createElement("td");
                let item4 = document.createElement("td");
                let item5 = document.createElement("td");
                let item6 = document.createElement("td");
                let item7 = document.createElement("td");
                let item8 = document.createElement("td");
                item1.innerHTML = `${s[a].name}`;
                item2.innerHTML = `${s[a].math}`;
                item3.innerHTML = `${s[a].Chinese}`;
                item4.innerHTML = `${s[a].English}`;
                item5.innerHTML = `${s[a].Programing}`;
                item6.innerHTML = `${s[a].sum}`;
                item7.innerHTML = `${s[a].ave}`;
                item8.innerHTML =
                    `<a id="botton_append"  type="button" onclick='append(${s[a].number})' class="btn btn-default" >修改</a>
                     <a id="botton_delete" type="button"  onclick='deleteInformation(${s[a].number})' class="btn btn-default">删除</a>`;
                list.appendChild(item8);
                list.insertBefore(item7, item8);
                list.insertBefore(item6, item7);
                list.insertBefore(item5, item6);
                list.insertBefore(item4, item5);
                list.insertBefore(item3, item4);
                list.insertBefore(item2, item3);
                list.insertBefore(item1, item2);
                showList.appendChild(list);
                console.log(showList);
            }
        }
        else {
            // console.log(j);
            for (let b = 0; b < j.length; b++) {
                for (let a = 0; a < s.length; a++) {
                    if (s[a].number === j[b]) {
                        let list = document.createElement("tr");
                        list.setAttribute("class", "printstudentto");//setAttribute() 方法创建或改变某个新属性。
                        let item1 = document.createElement("td");
                        let item2 = document.createElement("td");
                        let item3 = document.createElement("td");
                        let item4 = document.createElement("td");
                        let item5 = document.createElement("td");
                        let item6 = document.createElement("td");
                        let item7 = document.createElement("td");
                        let item8 = document.createElement("td");
                        item1.innerHTML = `${s[a].name}`;
                        item2.innerHTML = `${s[a].math}`;
                        item3.innerHTML = `${s[a].Chinese}`;
                        item4.innerHTML = `${s[a].English}`;
                        item5.innerHTML = `${s[a].Programing}`;
                        item6.innerHTML = `${s[a].sum}`;
                        item7.innerHTML = `${s[a].ave}`;
                        item8.innerHTML =
                            `<a id="botton_append"  type="button" onclick='append(${s[a].number})' class="btn btn-default" >修改</a>
                         <a id="botton_delete" type="button"  onclick='deleteInformation(${s[a].number})' class="btn btn-default">删除</a>`;
                        list.appendChild(item8);
                        list.insertBefore(item7, item8);
                        list.insertBefore(item6, item7);
                        list.insertBefore(item5, item6);
                        list.insertBefore(item4, item5);
                        list.insertBefore(item3, item4);
                        list.insertBefore(item2, item3);
                        list.insertBefore(item1, item2);
                        showList.appendChild(list);
                        /*                        var w= "<tr>" +
                         " <td>"+s[a].name+"</td>" +
                         "<td>"+s[a].math+"</td>" +
                         "</tr>";
                         $("#printstudent").append(w);*/
                    }
                    /*                   else{
                     layer.msg('没有该数据', {icon: 0});
                     }*/
                }
            }
        }
    })
});
//修改
function append(number) {
    // console.log(number);
    let stu = [];
    stu = JSON.parse(localStorage.getItem("date"));
    for (let i = 0; i < stu.length; i++) {
        if (stu[i].number == number) {
            // console.log(stu[i].number);
            let html_panel = `
                <form id="form_add" class="form-inline" role="form">
                <div class="form-group">
                    <label for="Name">学生姓名</label>
                    <input type="text" class="form-control" id="Name" name="Name1" placeholder="${stu[i].name}">
                </div>
                <div class="form-group">
                    <label for="Number">学生学号</label>
                    <input type="number" class="form-control" id="Number" name="Number1" disabled="disabled" value="${stu[i].number}" placeholder="${stu[i].number}">
                </div>
                <div class="form-group">
                    <label for="Family">学生民族</label>
                    <input type="text" class="form-control" id="Family" Name="Family1" placeholder="${stu[i].family}">
                </div>
                <div class="form-group">
                    <label for="Class">学生班级</label>
                    <input type="number" class="form-control" id="Class" Name="Class1" placeholder="${stu[i].Class}">
                </div>
                <div class="form-group">
                    <label for="Math">数学成绩</label>
                    <input type="number" class="form-control" id="Math" Name="Math1" placeholder="${stu[i].math}">
                </div>
                <div class="form-group">
                    <label for="Chinese">语文成绩</label>
                    <input type="number" class="form-control" id="Chinese" Name="Chinese1" placeholder="${stu[i].Chinese}">
                </div>
                <div class="form-group">
                    <label for="English">英语成绩</label>
                    <input type="number" class="form-control" id="English" Name="English1" placeholder="${stu[i].English}">
                </div>
                <div class="form-group">
                    <label for="Programing">编程成绩</label>
                    <input type="number" class="form-control" id="Programing" Name="Programing1"
                           placeholder="${stu[i].Programing}">
                </div>
            </form>`
            //删除student里的该数据
            stu.splice(i, 1);
            layer.open({
                title: '修改学生信息',
                content: html_panel,
                area: ['600px', '400px'],
                btn: ['提交', '取消'],
                yes:function () {
                    let i = {
                        name: document.getElementsByName("Name1")[0].value,//getElementsByName获取数组，要取出内部的值
                        number: document.getElementsByName("Number1")[0].value,
                        family: document.getElementsByName("Family1")[0].value,
                        Class: document.getElementsByName("Class1")[0].value,
                        math: document.getElementsByName("Math1")[0].value,
                        Chinese: document.getElementsByName("Chinese1")[0].value,
                        English: document.getElementsByName("English1")[0].value,
                        Programing: document.getElementsByName("Programing1")[0].value,
                        sum: parseFloat(document.getElementsByName("Math1")[0].value) + parseFloat(document.getElementsByName("Chinese1")[0].value) + parseFloat(document.getElementsByName("English1")[0].value) + parseFloat(document.getElementsByName("Programing1")[0].value),
                        ave: (parseFloat(document.getElementsByName("Math1")[0].value) + parseFloat(document.getElementsByName("Chinese1")[0].value) + parseFloat(document.getElementsByName("English1")[0].value) + parseFloat(document.getElementsByName("Programing1")[0].value)) / 4
                    }
                    let j = JSON.stringify(i);
                    localStorage.setItem("student", j);
                    //console.log(localStorage.getItem("student"));
                    stu.push(JSON.parse(localStorage.getItem("student")));
                    localStorage.setItem("date", JSON.stringify(stu));
                    //console.log(localStorage.getItem("date"));
                    layer.msg('修改成功', {icon: 1});
                }
            });
            /*yes - 确定按钮回调方法
             类型：Function，默认：null
             该回调携带两个参数，分别为当前层索引、当前层DOM对象。如：*/
        }
    }
    $(".printstudentto").remove();//清空
}
//删除
function deleteInformation(number) {
    let stu = [];
    stu = JSON.parse(localStorage.getItem("date"));
    for (let i = 0; i < stu.length; i++) {
        if (stu[i].number == number) {
            layer.confirm('你确定要删除该数据吗', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                //删除student里的该数据
                stu.splice(i, 1);
                localStorage.setItem("date", JSON.stringify(stu));
                layer.msg('删除成功', {icon: 1});
            }, function () {
            });
        }
    }
    $(".printstudentto").remove();//清空
}


/*
 <tr>
 <td>${studentObj.name}</td>
 <td>${studentObj.math}</td>
 <td>${studentObj.chinese}</td>
 <td>${studentObj.english}</td>
 <td>${studentObj.program}</td>
 <td>${studentObj.subTotal}</td>
 <td>${studentObj.subAverage}</td>
 </tr>
 */

