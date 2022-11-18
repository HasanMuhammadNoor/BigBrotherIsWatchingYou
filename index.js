const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table")

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'PASSWORD',
        database: 'employeeTracker_db'
},
    console.log("Welecome to Emp")
);
startMenu()

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'PASSWORD',
//     database: 'employeeTracker_db'
// },function(){
// console.log("Welecome to Emp")
// startMenu()
// });

function startMenu(){
    inquirer.prompt([
        {
            type: "list",
            name:"options",
            choices:["View Department","View Roles","View Employee","Add Department","Add Role","Add Employee","Exit Application"],
            message: "Choose an option.",

        }
    ]).then(function(response){
        switch(response.options){
            case "View Department":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employee":
                viewEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Roles":
                addRoles();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Exit Application":
                exitApplication();
                break;
        }
    })
};

function viewDepartment(){
    db.query("select * from department",function(err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
        startMenu()
    })
};

function viewRoles(){
    db.query("select * from role",function(err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
        startMenu()
    })
};

function viewEmployee(){
    db.query("select * from employee",function(err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
        startMenu()
    })
};