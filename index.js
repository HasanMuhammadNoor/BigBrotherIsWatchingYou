const inquirer = require("inquirer");
const mysql2 = require("mysql2");
require("console.table");

const db = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'PASSWORD',
        database: 'employeeTracker_db'
},
    console.log("This is the employeeTracker_db.")
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
            name: "options",
            choices: ["View Department","View Roles","View Employee","Add Department","Add Role","Add Employee","Exit Application"],
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
            case "Add Role":
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

function exitApplication(){
    db.end()
    process.exit(0)
};

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            message: "Input the department name.",
            name: "departmentName"
        }
    ]).then(function(response){
        db.query("insert into department(name)values(?)",response.departmentName,function(err,results){
            if(err){
                console.log(err)
            }
            console.table(results)
            startMenu()
        })
    })
};

function addRoles(){
    inquirer.prompt([
        {
            type: "input",
            message: "Input the role title.",
            name: "title"
        },
        {
            type: "input",
            message: "Input the role salary.",
            name: "salary"
        },
        {
            type: "list",
            message: "Input the role department.",
            choices:[
                {name:"IT",value:1},
                {name:"Sales",value:2},
                {name:"Marketing",value:3},
                {name:"Finance",value:4},
                {name:"Legal",value:5}
            ],
            name: "department"
        },
    ]).then(function(response){
        db.query("insert into role (title,salary,department_id)values(?,?,?)",
        [response.title,response.salary,response.department],function(err,results){
            if(err){
                console.log(err)
            }
            console.table(results)
            startMenu()
        })
    })
};

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "Input the employee name.",
            name: "employeeName"
        },
        {
            type: "input",
            message: "Input the employee last name.",
            name: "lastName"
        },
        {
            type: "list",
            choices:[
                {name:"Manager",value:1},
                {name:"Intern",value:6},
            ],
            message: "Input the employee role.",
            name: "role"
        },
    ]).then(function(response){
        db.query("insert into employee(first_name,last_name,role_id)values(?,?,?)",
        [response.employeeName,response.lastName,response.role],function(err,results){
            if(err){
                console.log(err)
            }
            console.table(results)
            startMenu()
        })
    })
};
