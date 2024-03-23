// Write your solution in this file!
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key]=value;
return employee;
}
const employee ={
    name:'Scarlet',
    role:'developer'
};
console.log(employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee,'role','Product Manager');
console.log(employee);// after updating

//sample employee object
employee = {
    name: 'Brian Ochieng',
    age:30,
    position:'Developer'
}; 
function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]:value
    };
}
const updateEmployee=updateEmployeeWithKeyAndValue(employee,'position','senior manager')
console.log(updateEmployee);
function deleteFromEmployeeByKey(employee,key){
    const newEmployee=Object.assign({},employee);
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee[key];
    return employee;
}


