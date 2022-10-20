class Student{
    // instance variables
    stuId: number = 0;
    stuName: string = "";
    stuAge: number = 0;
    stuStandard: number = 0;
    stuRollNo: number = 0;
    stuAddress: string = "";
    stuContact: number = 0;

    // parameterized constructor
    constructor(_sId: number, _sName: string, _sAge: number, _sStd: number, _sRollNo: number, _sAddress: string, _sContact: number){
        this.stuId = _sId;
        this.stuName = _sName;
        this.stuAge = _sAge;
        this.stuStandard = _sStd;
        this.stuRollNo = _sRollNo;
        this.stuAddress = _sAddress;
        this.stuContact = _sContact;
    }
}

class Students{
    students: any[];
    constructor(){
        this.students = [];
    }
    newStudent(id: any,name: any,age: any,std: any,rollno: any,address: any,contact: any){
        let s = new Student(id,name,age,std,rollno,address,contact);
        this.students.push(s);
        return s;
    }
    get allStudents(){
        return this.students;
    }
}

let records = new Students();
for(let i=0; i<5; i++){
    alert("Enter details for student "+(i+1));
    let name = prompt("Enter student name");
    let age = prompt("Enter student age");
    let std = prompt("Enter student standard");
    let rollno = prompt("Enter student roll number");
    let address = prompt("Enter student address");
    let contact = prompt("Enter student contact number");
    records.newStudent(i+1,name,age,std,rollno,address,contact);
}

records.allStudents;