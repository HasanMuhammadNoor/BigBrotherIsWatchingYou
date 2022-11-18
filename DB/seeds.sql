USE employeeTracker_db;

insert into department(name)values('IT'),('Sales'),('Marketing'),('Finance'),('Legal'),('Customer Service');

select * from department;

insert into role (title,salary,department_id)values
('Manager',12345,1),
('Manager',12354,2),
('Manager',12543,3),
('Manager',15432,4),
('Manager',54321,5),

('Intern',01234,1),
('Intern',01243,2),
('Intern',01432,3),
('Intern',04321,4),
('Intern',43210,5);

select * from role;

insert into employee(first_name,last_name,role_id)values
('Hasan','Noor',1),
('Noor','Hasan',2)
('John','Doe',3),
('Jane','Doe',4),
('George','Washington',5);

select * from employee;

insert into employee(first_name,last_name,role_id,manager_id)values
('Abraham','Lincoln',6,1),
('Thomas','Jefferson',7,2),
('Emma','Watson',8,3),
('Logan','Lerman',9,4),
('Matthew','Daddario',10,5);

select * from employee;