---
name: dependabot-fixer
description: Processes and fixes broken Dependabot pull requests in this repository.
---

# Mission: Dependabot Auto-Repair
Use this skill to autonomously clear the Dependabot backlog by testing and refactoring code to match new dependency APIs.

## Instructions
1. **Discover:** Search the repository's GitHub PR list for labels containing `dependabot`.
2. **Research:** For each PR, use the browser to read the "Release Notes" and "Changelog." Identify breaking changes.
3. **Test:** - Checkout the PR branch.
    - Run the local test suite: `npm test` (Change this to your specific test command).
4. **Repair:** - If tests fail, analyze the error log.
    - Locate the code file causing the conflict.
    - Refactor the code to comply with the updated library API using Gemini 3 reasoning.
    - Re-run tests until they pass.
5. **Verify & Merge:**
    - Generate a "Verification Artifact" (test log summary).
    - If successful, merge the PR via the GitHub API or Browser.

## Constraints
- Do not merge if the build fails after repair attempts.
- If a "Major" version update requires a significant architectural shift, flag it for manual review.
