import { Probot } from "probot";

function bot(app: Probot) {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Probot Next Skeleton App: Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

export default bot;