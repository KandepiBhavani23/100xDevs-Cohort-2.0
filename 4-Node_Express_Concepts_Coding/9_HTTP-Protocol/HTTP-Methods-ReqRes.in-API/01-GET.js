const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const userData = await response.json();
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error in Fetching USer Data");
  }
};

fetchUser(2);
fetchUser(1);
