import React from 'react';
import DownloadButton from '../components/DownloadButton';
import { Link } from 'react-router-dom';

const IntroductionToGit = () => {
  return (
    <div>
      <h1>Introduction to Git</h1>      
      
      <p>Git is a <a href='https://www.geeksforgeeks.org/version-control-systems/' target='_blank' class='outside-link'>Version Control System (VCS)</a> that helps in managing changes to the files over time. Git keeps track of what changes were made to our files. It can tell us what lines were added, removed, or modified. We can also go back in time to any previous snapshot and see how our files looked at that point.</p>

      <DownloadButton name='Pro Git' link='https://github.com/progit/progit2/releases/download/2.1.430/progit.pdf' />

      <h2>Repository</h2>
      
      <p>Git Repository is where Git stores all the information about a project. It can exist either locally on a user's machine or remotely on a server. Developers can collaborate on projects by sharing and syncing their repositories.</p>
      
      <h2>GitHub</h2>
      
      <p>GitHub is a web-based platform that allows us to store Git repositories online. This allows us to access our code from anywhere and collaborate with others. GitHub supports all Git functionalities such as branching, merging, and comparing versions. It provides a graphical interface for these operations, making them easier to manage.</p>
    </div>
  );
};

export default IntroductionToGit;