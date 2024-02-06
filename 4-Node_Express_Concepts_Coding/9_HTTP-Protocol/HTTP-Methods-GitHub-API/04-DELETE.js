const deleteGitHubRepository = async (repoName) => {
  let options = {
    method: "DELETE",
    headers: {
      Authorization: "token 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",
    },
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/KandepiBhavani23/${repoName}`,
      options
    );
    const deleteRepo = await response.json();
    console.log("Deleted GitHub Repository: ", deleteRepo);
  } catch (error) {
    console.error("Error deleting GitHub repository:", error);
  }
};

deleteGitHubRepository("GITHUB-API");
