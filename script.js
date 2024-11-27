/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {

    arr.map((item , i) => {
        if(item.profession === "developer") {
            console.log(item)
        }
    })
    
  }


  function PrintDeveloperbyForEach() {
    arr.forEach((student , i) => {
        if(student.profession === "developer") {
            console.log(student)
        }
    })
  }
  
  function addData(person) {

    const newPerson = { id: 4, name: "alice", age: "22", profession: "developer" };

    arr.push(newPerson);

    arr.map((student, i) => {
        console.log(student)
    })
    
  }

 

  
  function removeAdmin() {
    const newArray = arr.filter((student , i) => {
        return student.profession !== "admin"
    })

    newArray.map((student , i) => {
        console.log(student)
    })
    
  }
  
  function concatenateArray() {
    const anotherArray = [
        { id: 4, name: "alice", age: "22", profession: "developer" },
        { id: 5, name: "bob", age: "30", profession: "manager" },
      ];
    
      const combinedArray = arr.concat(anotherArray); // Concatenate the original array with another array
    
      combinedArray.map((student , i) => {
        console.log(student)
      })
  }