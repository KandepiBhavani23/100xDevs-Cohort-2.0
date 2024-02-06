const fetchGitHubProfileUser = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const profileData = await response.json();
    const jsonData = JSON.stringify(profileData, null, 2);
    console.log("GitHub Profile Data:");
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

fetchGitHubProfileUser("KandepiBhavani23");
