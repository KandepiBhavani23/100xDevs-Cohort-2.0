const updateGitHubRepo = async (repoName, updatedData) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "token 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",
    },
    body: JSON.stringify(updatedData),
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/KandepiBhavani23/${repoName}`,
      options
    );
    const updatedRepo = await response.json();
    console.log("Update Github Repo:", updatedRepo);
  } catch (error) {
    console.log("Error in updatin GitHub Repository: ", error);
  }
};

let updatedRepoData = {
  description: "Updated Repository Description using PUT Method",
};

updateGitHubRepo("GITHUB-API", updatedRepoData);
