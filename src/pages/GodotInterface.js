import React from 'react';
import Image from '../components/Image';
import OutsideLink from '../components/OutsideLink';
import Video from '../components/Video';

const GodotInterface = () => {
  return (
    <div>
      <h1>Godot Interface</h1>      
      
      <Video link={ 'https://www.youtube.com/embed/F53qTyIiZDc' } />

      <p>Godot comes with a fully-fledged game editor that includes a code editor, an animation editor, a tilemap editor, a shader editor, a debugger, a profiler, and more.</p>

      <Image name={ 'godot_interface.png' } />

      <h2>The Project Manager</h2>
      
      <p>When we first launch Godot, we see Local Projects tab of the Project Manager. It lets us manage existing projects, import or create new ones, and more.
      </p>
      
      <Image name={ 'project_manager.png' } />
      
      <p>
        At the top of the window, there is another tab named Asset Library Projects. We can search and download demo projects in the open source asset library.
        <Image name={ 'asset_library_projects.png' } />
      </p>      

      <p>The engine's language can be changed using the drop-down menu in the window's top-right corner. By default, it is in English.</p>
      
      <Image name={ 'language_changer.png' } />
      
      <h3>Create New Project</h3>

      <p></p>

      <p>
      </p>
    </div>
  );
};

export default GodotInterface;