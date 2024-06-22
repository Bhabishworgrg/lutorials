import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Image from '../components/Image';

const AddingYourChangesToGithub = () => {
  return (
    <div>
      <h1>Adding your changes to GitHub</h1>
      
      <h3>1. Unstaged Files</h3>
      
      <p>When files are added, modified or deleted in a repository, they are considered unstaged. This means they are not prepared to be committed to the repository.</p>
      
      <p>
        In VS Code, unstaged files are marked with <span style={{color: '#baa081'}}>M</span>(Modified), <span style={{color: '#68a589'}}>U</span>(Untracked) or <span style={{color: '#a64b47'}}>D</span>(Deleted).
        
        <Image name='unstaged_files.png' />
      </p>
      
      <h3>2. Adding Files</h3>
      
      <p>
        Firstly, we will add the files to the staging area so they can be included in the next commit.
        
        <CodeBlock code={ `git add .` } language={ 'shell' } />
        
        '.' indicates that we are adding all the files.
      </p>

      <h3>3. Committing</h3>
      
      <p>Committing means to record changes in the repository's history.</p>

      <p>
        The following command commits all the Staged Changes.
        
        <CodeBlock code={ `git commit -m "Add xyz feature"` } language={ 'shell' } />
        
        '-m' lets us leave a message describing the commit.
      </p>
      
      <h3>4. Pushing</h3>

      <p>Pushing sends the commits from our local computer to the remote repository.</p>

      <p>
        To push our commit, we will use this command.
        
        <CodeBlock code={ `git push origin branch-name` } language={ 'shell' } />
        
        'origin' indicates remote repository where the branch will be pushed.
      </p>
    </div>
  );
};

export default AddingYourChangesToGithub;