
    const employees=  [
          {
            "id": 1,
            "firstName": "Aarav",
            "email": "employee1@example.com",
            "password": "123",
            "status": "active",
            "taskNumber": {
              "newTask": 1,
              "completed": 1,
              "failed": 0,
              "accepted": 1
            },
            "tasks": [
              {
                "title": "Login Feature",
                "name": "Task 1",
                "date": "2024-11-01",
                "category": "Development",
                "description": "Implement the login feature",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": true,
                "active": true
              },
              {
                "title": "Unit Testing Module A",
                "name": "Task 2",
                "date": "2024-11-02",
                "category": "Testing",
                "description": "Run unit tests for module A",
                "newTask": false,
                "completed": true,
                "failed": false,
                "accepted": true,
                "active": false
              }
            ]
          },
          {
            "id": 2,
            "firstName": "Vivaan",
            "email": "employee2@example.com",
            "password": "123",
            "status": "inactive",
            "taskNumber": {
              "newTask": 2,
              "completed": 0,
              "failed": 0,
              "accepted": 1
            },
            "tasks": [
              {
                "title": "Wireframe Design",
                "name": "Task 3",
                "date": "2024-11-01",
                "category": "Design",
                "description": "Create wireframes for new feature",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": true,
                "active": true
              },
              {
                "title": "Code Refactoring",
                "name": "Task 4",
                "date": "2024-11-03",
                "category": "Development",
                "description": "Refactor code for performance improvement",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": false,
                "active": false
              }
            ]
          },
          {
            "id": 3,
            "firstName": "Aditya",
            "email": "employee3@example.com",
            "password": "123",
            "status": "active",
            "taskNumber": {
              "newTask": 1,
              "completed": 1,
              "failed": 0,
              "accepted": 1
            },
            "tasks": [
              {
                "title": "Deployment Preparation",
                "name": "Task 5",
                "date": "2024-11-04",
                "category": "Deployment",
                "description": "Prepare deployment scripts",
                "newTask": false,
                "completed": true,
                "failed": false,
                "accepted": true,
                "active": false
              },
              {
                "title": "Integration Testing",
                "name": "Task 6",
                "date": "2024-11-05",
                "category": "Testing",
                "description": "Conduct integration testing",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": true,
                "active": true
              }
            ]
          },
          {
            "id": 4,
            "firstName": "Sai",
            "email": "employee4@example.com",
            "password": "123",
            "status": "inactive",
            "taskNumber": {
              "newTask": 1,
              "completed": 1,
              "failed": 0,
              "accepted": 1
            },
            "tasks": [
              {
                "title": "Search Functionality",
                "name": "Task 7",
                "date": "2024-11-06",
                "category": "Development",
                "description": "Implement search functionality",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": true,
                "active": true
              },
              {
                "title": "API Documentation Update",
                "name": "Task 8",
                "date": "2024-11-07",
                "category": "Documentation",
                "description": "Update API documentation",
                "newTask": false,
                "completed": true,
                "failed": false,
                "accepted": true,
                "active": false
              }
            ]
          },
          {
            "id": 5,
            "firstName": "Isha",
            "email": "employee5@example.com",
            "password": "123",
            "status": "active",
            "taskNumber": {
              "newTask": 1,
              "completed": 0,
              "failed": 1,
              "accepted": 0
            },
            "tasks": [
              {
                "title": "Code Review Module B",
                "name": "Task 9",
                "date": "2024-11-08",
                "category": "Review",
                "description": "Code review for module B",
                "newTask": true,
                "completed": false,
                "failed": false,
                "accepted": false,
                "active": true
              },
              {
                "title": "Load Testing",
                "name": "Task 10",
                "date": "2024-11-09",
                "category": "Testing",
                "description": "Load testing for critical features",
                "newTask": false,
                "completed": false,
                "failed": true,
                "accepted": true,
                "active": false
              }
            ]
          }
        ]
    
      
      
    

    const Admin=[
        {
          "id": 1,
          "email": "admin@example.com",
          "password": "1234"
        }
     ] 


     export const setLocalStorage=()=>
     {
        localStorage.setItem("Employees",JSON.stringify(employees));
        localStorage.setItem("Admin",JSON.stringify(Admin));

     }

     export const getLocalStorage=()=>
     {
       const Employees= JSON.parse(localStorage.getItem('Employees'));
       const Admin =JSON.parse(localStorage.getItem('Admin'));
       return {Employees , Admin}
      // console.log(Admin);
      // console.log(Employees)
       
     }

      
  
  