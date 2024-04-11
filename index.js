function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => {
      // Access the new id and append it to the DOM
      const id = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Handle errors and append error message to the DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

// Test the function
submitData("John Doe", "johndoe@example.com");
