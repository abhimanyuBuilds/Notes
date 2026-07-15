/*Problem 2: Second Highest Salary (Easy-Medium)



CREATE TABLE Employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT
);


sample data 


INSERT INTO Employee VALUES
(1,'Alice',80000),
(2,'Bob',90000),
(3,'Charlie',90000),
(4,'David',60000),
(5,'Emma',100000);


Problem Statement
Return the second highest unique salary.
If no second highest salary exists, return NULL.


select 
id , salary ,
row_number() over(order by salary desc) as "2ndHeighestSalary" 
from employee



Q-2 Customers Who Never Placed an Order
CREATE TABLE Customers (
    customerId INT PRIMARY KEY,
    customerName VARCHAR(50)
);

CREATE TABLE Orders (
    orderId INT PRIMARY KEY,
    customerId INT,
    orderDate DATE
);

INSERT INTO Customers VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Charlie'),
(4,'David'),
(5,'Emma');

INSERT INTO Orders VALUES
(101,1,'2026-01-10'),
(102,3,'2026-01-15'),
(103,1,'2026-02-10'),
(104,5,'2026-03-20');


Problem Statement
Find customers who have never placed an order.
Return only the customer names.
Sort alphabetically
###  Expected Output
customerName
Bob
David


select c.customerName as Name , c.customerId , orderId
from customers as c
left join orders as ord 
on ord.customerId = c.customerId
where orderId is null
order by customerName asc




Question 3: Highest Paid Employee in Every Department (Medium)


CREATE TABLE Department (
    departmentId INT PRIMARY KEY,
    departmentName VARCHAR(50)
);

CREATE TABLE Employee4 (
    employeeId INT PRIMARY KEY,
    employeeName VARCHAR(50),
    salary INT,
    departmentId INT
    
    
    
    INSERT INTO Department VALUES
(1,'Engineering'),
(2,'HR'),
(3,'Sales');

INSERT INTO Employee VALUES
(1,'Alice',120000,1),
(2,'Bob',150000,1),
(3,'Charlie',90000,2),
(4,'David',90000,2),
(5,'Emma',110000,3),
(6,'Frank',95000,3);






Problem Statement

Find the highest-paid employee(s) in each department.

If multiple employees have the same highest salary, return all of them.

Return:

Department Name
Employee Name
Salary

Sort by department name.

Expected Output
Department	     Employee	Salary
Engineering   	    Bob	    150000
HR	               Charlie	90000
HR	               David	90000
Sales	           	Emma	110000
);


with heighest_rank AS (
select
 dpt.departmentName as Department , EMP.employeeName as Employee , EMP.salary , 
dense_rank() over (partition by  dpt.departmentName  order by salary desc) as s
from employee4 as EMP 
left join department as dpt 
on EMP.departmentId = dpt.departmentId 
)
select Department , Employee , salary from heighest_rank where s < 2





-- ==========================
-- Create Database Tables
-- ==========================

CREATE TABLE employees5 (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    department VARCHAR(50)
);

CREATE TABLE tasks (
    task_id INT PRIMARY KEY,
    employee_id INT,
    task_name VARCHAR(100),
    status VARCHAR(20),
    FOREIGN KEY (employee_id) REFERENCES employees5(employee_id)
);

-- ==========================
-- Insert Data
-- ==========================

INSERT INTO employees5 (employee_id, employee_name, department) VALUES
(1, 'Alice', 'HR'),
(2, 'Bob', 'IT'),
(3, 'Charlie', 'IT'),
(4, 'David', 'Sales');

INSERT INTO tasks (task_id, employee_id, task_name, status) VALUES
(101, 1, 'Hiring', 'Completed'),
(102, 1, 'Payroll', 'Pending'),
(103, 2, 'API Development', 'Completed'),
(104, 2, 'Bug Fix', 'Completed'),
(105, 2, 'Documentation', 'Pending'),
(106, 3, 'Database Design', 'Completed'),
(107, 3, 'Testing', 'Completed'),
(108, 3, 'Deployment', 'Completed'),
(109, 4, 'Client Meeting', 'Pending');

-- ==========================================
-- Question
-- ==========================================

/*

Write an SQL query to find the total number of
completed tasks for each employee.

Rules:
1. Include employees even if they have completed 0 tasks.
2. Count only tasks where status = 'Completed'.
3. Return:
   - employee_name
   - completed_tasks
4. Order by:
   completed_tasks DESC,
   employee_name ASC


-- Expected Output

+---------------+-----------------+
| employee_name | completed_tasks |
+---------------+-----------------+
| Charlie       | 3               |
| Bob           | 2               |
| Alice         | 1               |
| David         | 0               |
+---------------+-----------------+



SELECT 
    EMP.employee_name , 
    COUNT(
    case 
		when task.status = "completed" then 1
        End 
        ) as completed_tasks
FROM
    employees5 AS EMP
        LEFT JOIN
    tasks AS task ON EMP.employee_id = task.employee_id
GROUP BY emp.employee_name , emp.employee_id 
ORDER BY completed_tasks desc , emp.employee_name 



-------------------------------------------------------------------   



Question: Customers Who Spent More Than the Average Customer
Schema
CREATE TABLE customers2 (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE orders2 (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers2(customer_id)
);




INSERT INTO customers2 (customer_id, customer_name, city) VALUES
(1, 'Alice', 'Delhi'),
(2, 'Bob', 'Mumbai'),
(3, 'Charlie', 'Pune'),
(4, 'David', 'Delhi'),
(5, 'Eva', 'Bangalore');

INSERT INTO orders2 (order_id, customer_id, order_date, amount) VALUES
(101, 1, '2026-01-05', 500),
(102, 1, '2026-01-10', 700),
(103, 2, '2026-01-12', 900),
(104, 2, '2026-01-18', 600),
(105, 3, '2026-01-20', 300),
(106, 4, '2026-01-25', 1200),
(107, 4, '2026-01-28', 800),
(108, 5, '2026-01-30', 400);



Problem Statement
Write an SQL query to find all customers whose total spending is greater than the average total spending of all customers.

Return
customer_name
total_spent
Sort by
total_spent DESC
customer_name ASC





Expected Output
customer_name	total_spent
David	       2000
Alice	       1200
Bob	           1500


-- SELECT 
--     customer_name, total AS total_spent
-- FROM
--     (SELECT 
--         c.customer_name,
--             SUM(o.amount) AS total,
--             AVG(o.amount) AS average_spent,
--             c.customer_id
--     FROM
--         customers2 AS c
--     LEFT JOIN orders2 AS o ON c.customer_id = o.customer_id
--     GROUP BY c.customer_id
--     HAVING total > average_spent
--     ORDER BY total DESC) AS t
--- CORRECT APProach


-- SELECT
--     customer_name,
--     total AS total_spent
-- FROM
-- (
--     SELECT
--         c.customer_id,
--         c.customer_name,
--         SUM(o.amount) AS total
--     FROM customers2 AS c
--     LEFT JOIN orders2 AS o
--         ON c.customer_id = o.customer_id
--     GROUP BY
--         c.customer_id,
--         c.customer_name
-- ) AS customer_total
-- WHERE total >
-- (
--     SELECT AVG(total)
--     FROM
--     (
--         SELECT
--             SUM(amount) AS total
--         FROM orders2
--         GROUP BY customer_id
--     ) AS avg_total
-- )
-- ORDER BY
--     total DESC,
--     customer_name ASC;



















-- self join question 



-- Create Table

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT,
    manager_id INT
);

-- Insert Data

INSERT INTO employees (employee_id, employee_name, salary, manager_id)
VALUES
(1, 'John', 90000, NULL),
(2, 'Alice', 60000, 1),
(3, 'Bob', 95000, 1),
(4, 'David', 50000, 2),
(5, 'Emma', 75000, 2),
(6, 'Ryan', 120000, 3);


select
emp.employee_name , emp.salary as employee_salary , e.employee_name as manager_name , e.salary as manager_salary
from employees as e 
join employees as emp 
on e.employee_id = emp.manager_id
where emp.salary > e.salary



CREATE TABLE employeess (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT,
    manager_id INT
);

INSERT INTO employeess (employee_id, employee_name, salary, manager_id)
VALUES
(1, 'John', 90000, NULL),
(2, 'Alice', 60000, 1),
(3, 'Bob', 95000, 1),
(4, 'David', 50000, 2),
(5, 'Emma', 75000, 2),
(6, 'Ryan', 120000, 3),
(7, 'Sophia', 65000, 1),
(8, 'Chris', 70000, 2);


Expected Output
Employee_1	Employee_2	Manager_ID
Alice	Bob	1
Alice	Sophia	1
Bob	Sophia	1
David	Emma	2
David	Chris	2
Emma	Chris	2




---------

CREATE TABLE Customers1 (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);


CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);



CREATE TABLE Orders4 (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers1(customer_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

INSERT INTO Customers1 VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Charlie'),
(4,'David');

INSERT INTO Products VALUES
(101,'Laptop'),
(102,'Mouse'),
(103,'Keyboard');

INSERT INTO Orders VALUES
(1,1,101),
(2,1,102),
(3,1,103),
(4,2,101),
(5,2,102),
(6,3,101),
(7,3,103),
(8,4,101),
(9,4,102),
(10,4,103),
(11,4,103);

-----------------------------------------
Expected Output
customer_id	customer_name
1				Alice
4				David
----------------------------------------

Problem

Write a query to find customers who have purchased every product available in the Products table.

Note: If a customer buys the same product multiple times, it should count only once.



select   C.customer_id ,C.customer_name
from customers1 as C
left join Orders1 as O
on C.customer_id = O.customer_id
left join Products as P
on P.product_id = O.product_id
group by C.customer_name , C.customer_id
having count(distinct O.product_id)  = (
select count(*) from products
)


Customers Who Never Order

CREATE TABLE Customers3 (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Orders3 (
    id INT PRIMARY KEY,
    customerId INT,
    FOREIGN KEY (customerId) REFERENCES Customers3(id)
);


-- Insert Data 
INSERT INTO Customers3 (id, name) VALUES
(1, 'Joe'),
(2, 'Henry'),
(3, 'Sam'),
(4, 'Max');

INSERT INTO Orders3 (id, customerId) VALUES
(1, 3),
(2, 1);


Question

Write a SQL query to find all customers who never placed an order.
Return the result in the following format:

Qutput --------------- Customers
Henry
Max




SELECT 
    C.name
FROM
    customers3 AS C
        LEFT JOIN
    orders3 AS O ON C.id = O.customerId
WHERE
    O.customerId IS NULL







CREATE TABLE Customers(

    customer_id INT PRIMARY KEY,

    customer_name VARCHAR(50)

);

CREATE TABLE Orders(

    order_id INT PRIMARY KEY,

    customer_id INT,

    amount INT,

    order_date DATE,

    FOREIGN KEY(customer_id)
    REFERENCES Customers(customer_id)



Insert Data
INSERT INTO Customers VALUES

(1,'Abhi'),
(2,'Rahul'),
(3,'Shivam'),
(4,'Rohit'),
(5,'Aman');
INSERT INTO Orders VALUES

(101,1,2000,'2026-01-01'),
(102,1,1500,'2026-01-10'),
(103,1,2000,'2026-01-15'),

(104,2,1000,'2026-01-05'),
(105,2,500,'2026-01-11'),

(106,3,3000,'2026-01-04'),
(107,3,2500,'2026-01-18'),
(108,3,1000,'2026-01-25'),

(109,4,7000,'2026-01-20'),

(110,5,2000,'2026-01-08'),
(111,5,2000,'2026-01-12'),
(112,5,2000,'2026-01-28');
);
-- solution 


select c.customer_name , c.customer_id , sum(o.amount) as total , count(o.customer_id) as top
from customers as C
left join orders as O 
on C.customer_id = O.customer_id
group by c.customer_name , c.customer_id
having count(o.customer_id) >= 3 and sum(o.amount) >= 5500
order by total desc
*/
-- select * from customers ;
-- select * from orders;