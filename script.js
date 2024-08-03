document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const professionInput = document.getElementById("profession");
  const ageInput = document.getElementById("age");
  const addUserBtn = document.getElementById("addUserBtn");
  const message = document.getElementById("message");
  const employeeList = document.getElementById("employeeList");
  const defaultMessage = document.getElementById("defaultMessage");

  let employees = [];
  let idCounter = 1;

  addUserBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !profession || !age) {
      message.textContent = "Error: All fields are required!";
      message.className = "error";
      message.style.display = "block";
      return;
    }

    const employee = {
      id: idCounter++,
      name,
      profession,
      age,
    };

    employees.push(employee);
    updateEmployeeList();

    message.textContent = "Success: Employee Added!";
    message.className = "success";
    message.style.display = "block";

    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";
  });

  function updateEmployeeList() {
    employeeList.innerHTML = "";
    if (employees.length === 0) {
      defaultMessage.style.display = "block";
    } else {
      defaultMessage.style.display = "none";
    }
    employees.forEach((employee) => {
      const employeeContainer = document.createElement("div");
      employeeContainer.className = "employee-container";
      employeeContainer.innerHTML = `
        <div class="employee">
          <span class="employee-details">
            <span>${employee.id}.</span> 
            <span>Name: ${employee.name}</span>
            <span>Profession: ${employee.profession}</span>
            <span>Age: ${employee.age}</span>
          </span>
        </div>
        <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>
      `;
      employeeList.appendChild(employeeContainer);
    });
  }

  window.deleteEmployee = function (id) {
    employees = employees.filter((employee) => employee.id !== id);
    updateEmployeeList();
  };
});
