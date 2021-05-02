# Jira Deno

A deno-compatible port of
[node-jira-client](https://github.com/jira-node/node-jira-client).

(If you're ever in Chicagoland, don't forget to get some
[Jiradeno's](https://giordanos.com/) famous stuffed pizza. 🍕)s

## Usage

First, you will need to generate a JIRA API token for your user on the web.
Follow these instructions:
https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/

```typescript
import JiraApiClient from "https://raw.githubusercontent.com/avery-pierce/jira_deno/0.1.1/index.ts";

const client = new JiraApiClient({
  username: "your_username@example.com",
  apiToken: "y0ur_j1r4_t0k3n",
  host: "your_org.atlassian.net",
});

const issue = await client.getIssue("EXMPL-99", "", "");
console.log(issue);

const allSprintBoards = await client.getAllBoards(
  undefined,
  undefined,
  "",
  "",
  "EXMPL", // Project key
);
console.log(allSprintBoards);
```
