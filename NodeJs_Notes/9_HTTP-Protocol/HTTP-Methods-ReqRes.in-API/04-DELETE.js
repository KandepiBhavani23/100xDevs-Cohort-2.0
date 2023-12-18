const deleteUser = async (userId) => {
  let options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `https://reqres.in/api/users/${userId}`,
      options
    );
    console.log(response);
  } catch (error) {
    console.log("Error in Deleting Data", error);
  }
};

deleteUser();
