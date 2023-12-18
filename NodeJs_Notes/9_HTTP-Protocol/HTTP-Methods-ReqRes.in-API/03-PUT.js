const updateUserData = async (userId, updatedUserData) => {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUserData),
  };

  try {
    const response = await fetch(
      `https://reqres.in/api/users/${userId}`,
      options
    );
    const updatedUser = await response.json();
    console.log("Updated User Data", updatedUser);
  } catch (error) {
    console.log("Error in Creatin New User", error);
  }
};

const newUserData = {
  id: 13,
  email: "kandepibhavani@reqres.in",
  first_name: "K",
  last_name: "Kandepi",
};

updateUserData(13, newUserData);
