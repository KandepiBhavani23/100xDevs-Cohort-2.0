const createNewUser = async (newUserData) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  };

  try {
    const response = await fetch("https://reqres.in/api/users/", options);
    const userData = await response.json();
    console.log("New User Data", userData);
  } catch (error) {
    console.log("Error in Creatin New User", error);
  }
};

const newUserData = {
  id: 13,
  email: "kandepibhavani@reqres.in",
  first_name: "Bhavani",
  last_name: "Kandepi",
};

createNewUser(newUserData);
