# Git Workflow Strategy

## Overview

We use a simple and effective Git strategy **without a `develop` branch**. All development is done in feature branches, and merged into the `main` branch through Pull Requests.

## Main Branches

- `main` — Stable, production-ready code.
- `feature/*` — For developing new features.
- `hotfix/*` — Urgent fixes for production issues.
- `release/*` — (Optional) Pre-release stabilization and testing.

## Feature Workflow

1. Each new task gets its own branch:  
   `feature/task-name`, e.g.  
   `feature/user-authentication`

2. Branch off from `main`.

3. Make your changes and commit locally.

4. Open a Pull Request (PR) into `main`.

5. PR must pass code review and CI checks.

6. Once approved, merge using **Squash and Merge**.

## Hotfix Workflow

1. Create the branch from `main`:  
   `hotfix/fix-login-error`

2. After the fix:
   - Merge into `main` (optionally tag a release).
   - If needed, cherry-pick into active feature branches.

## Release Branches (Optional)

- Use `release/*` branches if a release needs final testing or minor adjustments before deploying:  
  `release/v1.3.0`

- This allows final QA/fixes without blocking `main`.

## Branch Naming Conventions

| Branch Type | Prefix      | Example                      |
|-------------|-------------|------------------------------|
| Feature     | `feature/`  | `feature/add-user-profile`   |
| Hotfix      | `hotfix/`   | `hotfix/fix-login-bug`       |
| Release     | `release/`  | `release/v2.0.0`             |

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):


## Merge Rules

- All changes go through a Pull Request.
- Use **Squash and Merge** to keep history clean.
- `main` stays linear and easy to follow.
- All commits must pass CI before being merged.


## Summary

 `main` is the only long-living branch.
 All work happens in short-lived `feature/*` branches.
 No `develop` branch — fewer complications.
 Simple flow: branch  code > PR > review > merge.
 