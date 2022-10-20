// Step 1: Define inteface/class
interface Department{
    deptId: number
    deptName: string
}
interface EmployeeDetail extends Department{
    empId: string
    empName: string
    designation: string
    dateOfJoining: string
    phoneNumber: number
    department: Department
}

// Step 2: Consume REST API
const webApiUrl = "http://127.0.0.1:9001/api/employees"

// Step 3: fetch all data using async/await/promise
const fetchEmployees = async (url: string): Promise<EmployeeDetail[]> =>{
    const response = await fetch(url)
    const data: any = await response.json()
    console.log(data)
    return data
}

const searchByPhoneNum = async (url: string, id: number): Promise<EmployeeDetail[]> => {
    const response = await fetch(url+'/'+id)
    const data: any = await response.json()
    console.log(data)
    return data    
}

// Step 4: Call asynchronous function
fetchEmployees(webApiUrl)
let phoneNum = prompt("Enter Employee Phone Number to search")
searchByPhoneNum(webApiUrl,phoneNum)

// Step 4: Reference js file in html to see output in console

