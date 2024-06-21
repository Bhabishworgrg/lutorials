import React from 'react';
import Image from '../components/Image';
import OutsideLink from '../components/OutsideLink';
import Video from '../components/Video';

const IntroductionToGodot = () => {
  return (
    <div>
      <h1>Introduction to Godot</h1>      
      
      <Video link={ 'https://www.youtube.com/embed/QKgTZWbwD1U' } />

      <p>Godot is a general-purpose 2D and 3D game engine designed to create games. It can be used to release games on desktop or mobile, as well as on the web. Moreover, it is open-source and licensed under the MIT license, making it free to use for any kind of project, commercial or non-commercial.</p>

      <h2>What can the engine do?</h2>
      
      <p>Some examples of games created with Godot include Ex-Zodiac and Helms of Fury.</p>

      <Image name={ 'ex_zodiac.png' } />
      <Image name={ 'helms_of_fury.png' } />

      <p>You can find many more examples in the <OutsideLink link={ 'https://www.youtube.com/playlist?list=PLeG_dAglpVo6EpaO9A1nkwJZOwrfiLdQ8' } title={ 'official showcase videos' } />.</p>

      <h2>Programming languages</h2>

      <p>Godot allows us to code using GDScript, a Godot-specific and Python-like language, or C#, which is popular in the games industry. Other than these two main scripting languages, we can also write gameplay or high-performance algorithms in C or C++ with the GDExtension technology.</p>

      <h2>What do I need to know to use Godot?</h2>

      <p>To make the most of Godot, good programming foundation is necessary. Godot relies on the object-oriented programming paradigm. Being comfortable with concepts such as classes and objects is helpful.</p>

      <p>With its thousands of features, there is a lot to learn in Godot. Thankfully, it has thorough <OutsideLink link={ 'https://docs.godotengine.org/en/4.2/getting_started/introduction/index.html' } title={ 'documentation' } /> and an active community, providing a wealth of tutorials, guides, and forums for support.</p>
    </div>
  );
};

export default IntroductionToGodot;