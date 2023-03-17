var selectedRow = null
function myFunction(event){
alert(e);
    
    var formData=readformData();
    if(selectedRow==null)
        insertNewRecord(formData);
       else
        updateRecord(formData);
        resetform();
       }


function readformData(){
    var formData = {};
    formData["Fname"]=document.getElementById("sample_id").Value;
    formData["LName"]=document.getElementById("sample_id").Value;
    formData["Gender"]=document.getElementById("sample_id").Value;
    formData["Course"]=document.getElementById("sample-id").Value;
    return formData;
}

//insert data
function insertNewRecord(data){
    var table = document.getElementById("details").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.insertHTML=data.Fname;
    cell2 = newRow.insertCell(1);
        cell2.insertHTML=data.Lname;
    cell3 = newRow.insertCell(2);
        cell1.insertHTML=data.Gender;
    cell4 = newRow.insertCell(3);
        cell4.insertHTML=data.Course;
    cell4 = newRow.insertCell(4);
        cell4.insertHTML='<button onclick="onEdit">Edit</button> <button>Delete</button>'

}

//edit data
function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById("Fname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Lname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Gender").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Course").value=selectedRow.cells[0].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.Fname;
    selectedRow.cells[0].innerHTML=formData.Lname;
    selectedRow.cells[0].innerHTML=formData.Gender;
    selectedRow.cells[0].innerHTML=formData.Course;

}

//Delete data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    resetform();
    }
}

//Reset data
function resetform(){
    document.getElementById("Fname").value ="";
    document.getElementById("Lname").value ="";
    document.getElementById("Gender").value ="";
    document.getElementById("Course").value ="";
    selectedRow=null;
}

