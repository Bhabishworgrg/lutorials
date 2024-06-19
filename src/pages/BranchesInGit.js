import React from 'react';
import CodeBlock from '../components/CodeBlock';

const BranchesInGit = () => {
  return (
    <div>
      <h1>Branches in Git</h1>
      
      <p>A branch in Git is like a parallel version of your project. It allows you to work on a specific feature independently without affecting the main codebase. Imagine a project as a tree trunk, then each branch is like a branch growing out from the trunk.</p>

      <h2>Main Branch</h2>
      
      <p>The main branch, often called main or master, represents the main line of development. It's where the stable version of the project lives.</p>

      <h2>Feature Branches</h2>
      
      <p>When we want to work on a new feature or experiment with something without affecting the main branch, we create a new branch, which is called a feature branch. We can make changes, try new things, and test without worrying about messing up the main branch.</p>

      <h2>Merging</h2>
      
      <p>Once we're happy with the changes in our feature branch and want to add them to the main branch, we merge the feature branch back into the main branch. This way the changes we made will be added to the main branch</p>
      
      <h2>Commands</h2>

      <h3>1. Listing</h3>

      <p>
        The following command will list all the branches and will highlight the current branch with an asterisk(*).
        <CodeBlock code={ `git branch` } language={ 'shell' } />
      </p>

      <h3>2. Switching</h3>

      <p>
        To switch to an existing branch, we use:
        <CodeBlock code={ `git checkout branch-name` } language={ 'shell' } />
        The checkout subcommand takes the name of the branch as an argument and switches to that branch.
      </p>

      <h3>3. Creating</h3>

      <p>
        In a team, many members can change the contents in the remote repository. Hence, it's a good practice to update your local repository before creating a branch.
      </p>

      <p>
        Firstly, we switch to the main branch:
        <CodeBlock code={ `git checkout main` } language={ 'shell' } />
      </p>

      <p>
        Then, we use pull to fetch the latest changes from the remote repository and merge them in our local repository.
        <CodeBlock code={ `git pull origin main` } language={ 'shell' } />
        The pull subcommand fetches changes from origin (remote repository) into our local main branch and merges them.
      </p>

      <p>
        We can create a new branch and switch to it in a single command.
        <CodeBlock code={ `git checkout -b new-branch` } language={ 'shell' } />
        The checkout subcommand indicates the process is branch related and -b takes a name for the branch and creates it.
      </p>
    </div>
  );
};

export default BranchesInGit;