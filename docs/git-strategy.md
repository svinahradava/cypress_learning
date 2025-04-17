# Git Workflow Strategy

## Overview

We use a simple and effective Git strategy **without a `develop` branch**. All development is done in feature branches, and merged into the `main` branch through Pull Requests.

## Main Branches

- `main` — Stable, production-ready code.
- `feature/*` — For developing new features.


## Feature Workflow

1. Each new task gets its own branch:  
   `feature/task-name`, e.g.  
   `feature/user-authentication`

2. Branch off from `main`.

3. Make your changes and commit locally.

4. Open a Pull Request (PR) into `main`.

5. PR must pass code review and CI checks.

6. Once approved, merge using **squash merges only**.

## Branch Naming Conventions

| Branch Type | Prefix      | Example                      |
|-------------|-------------|------------------------------|
| Feature     | `feature/`  | `feature/add-user-profile`   |

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

## Branch Protection and Merge Rules

To maintain a clean and stable `main` branch, the following protection rules are enforced:

- **Direct commits to `main` are not allowed.**  
  All changes must go through a Pull Request.
  
- **Pull requests must be reviewed and approved** before being merged. One approver per PR

- **Only squash merges are allowed**, to ensure a linear and clean commit history.

## Summary

 `main` is the only long-living branch.
 All work happens in short-lived `feature/*` branches.
 No `develop` branch — fewer complications.
 Simple flow: branch  code > PR > review > merge.
 