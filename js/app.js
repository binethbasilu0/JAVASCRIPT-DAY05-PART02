//console.log("Hello");
////this "clear(); method" use to clear the session of localSgtorage
////localStorage.clear();
//
////this "setItem(); Method" use to set the key and value on the localStorage
//localStorage.setItem("name","John");
//localStorage.setItem("age","30");
//localStorage.setItem("city","New York");
//
//
////another method for using to remove/clear the decided value from the current session .
////localStorage.removeItem("age");
//
////How to read data form local storage
////if the above setItems commented on the js code then date displays by using localStorage and
////  based on session 
//let name=localStorage.getItem("name");
//let age=localStorage.getItem("age");
//let city=localStorage.getItem("city");
//console.log(name,age,city);
//
//
////objects in localStorage
//
//let customer={
//    name:"Amal",
//    age:"35",
//    city:"colombo",
//}
///*--->*/localStorage.setItem("customer",customer);
//        console.log(customer);
////there is an issue,if the localStorage shows
//
//
////step-01  --convert object to string
//
//let stringCustomer=JSON.stringify(customer);
//
////step-02 --store string in local storage
//localStorage.setItem("customer",stringCustomer);
//
//
////get customer from localStorage
//
////1st step- retrieve string from localStorage
//let getCustomer=localStorage.getItem("customer");
////2nd step- convert string back to object
//let parsedCustomer = JSON.parse(getcustomer);
//console.log(parsedCustomer);

// ---------------------- CRUD operations in localStorage--------------------

let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {

    let customer = {
        id:document.getElementById("txtid").value,
        name:document.getElementById("txtname").value,
        age:document.getElementById("txtage").value,
        address:document.getElementById("txtaddress").value
    }
    // console.log(customer);
    customerList.push(customer);
    // console.log(customerList);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();
    
}

function btnSearchCustomrOnAction() {
    // alert("search customer");

    let id =document.getElementById("txtid").value

    let customer = customerList.find(c => c.id === id);

    if(customer){
        document.getElementById("txtname").value = customer.name;
        document.getElementById("txtage").value = customer.age;
        document.getElementById("txtaddress").value = customer.address;
    }else{
        alert("Customer not found");
    }
}

function btnDeleteCustomrOnAction() {
    // alert("delete customer");

    let id =document.getElementById("txtid").value

    let index = customerList.findIndex(c => c.id === id);

    if(index !== -1){
        customerList.splice(index, 1);
        localStorage.setItem("customerList", JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("Customer not found");
    }
}

function btnUpdateCustomrOnAction() {
     // alert("update customer");
    let id =document.getElementById("txtid").value

    let customer = customerList.find(c => c.id === id);

    if(customer){
        customer.name = document.getElementById("txtname").value;
        customer.age = document.getElementById("txtage").value;
        customer.address = document.getElementById("txtaddress").value;

        localStorage.setItem("customerList", JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("Customer not found");
    }
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
}

function btnLoadTableOnAction() {
    // alert("load table");
    
    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}

btnLoadTableOnAction();