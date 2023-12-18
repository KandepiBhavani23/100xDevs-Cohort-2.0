const createGitHubRepository = async (repoName) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "token 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",
    },
    body: JSON.stringify({
      name: repoName,
      description: "My new repository created using the GitHub API",
    }),
  };

  try {
    let response = await fetch("https://api.github.com/user/repos", option);
    const createdRepo = await response.json();
    console.log("Create Github Repository", createdRepo);
  } catch (error) {
    console.log("Error in creating Github Repo", error);
  }
};

createGitHubRepository("GITHUB-API");
