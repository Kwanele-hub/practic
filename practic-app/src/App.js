import React,{Component} from 'react';

import './App.css';

class App extends Component() {
  constructor(props){
    super(props)
    this.state = {
      // topics:'css',bootstrap:'bootstrap',sass:'sass',flexbox:'flexbox'
    };

    
  }

  render(){
    const{css,bootstrap,sass,flexbox} = this.state
    
    console.log(this.state)
    return(
      <div className="App">
        <form onSubmit={this.handleSubmit} >
        <input type="text" name='css' value={css} placeholder="css" onChange={this.handleChange} />

<input type='text' name='bootstrap' value={bootstrap} placeholder='bootstrap' onchange={this.handleChange} />
        <h1>1st course</h1>
        <p>Software developmentBootstrapping can also refer to the development of successively more complex, faster programming environments.
The simplest environment will be, perhaps, a very basic text editor (e.g., ed) and an assembler program. Using these tools,
one can write a more complex text editor, and a simple compiler for a higher-level language and so on, until one can have a graphical IDE and an extremely high-level programming language.
Historically, bootstrapping also refers to an early technique for computer program development on new hardware.
The technique described in this paragraph has been replaced by the use of a cross compiler executed by a pre-existing computer.
Bootstrapping in program development began during the 1950s when each program was constructed on paper in decimal code or in binary code,
bit by bit (1s and 0s), because there was no high-level computer language, no compiler, no assembler, and no linker.
A tiny assembler program was hand-coded for a new computer (for example the IBM 650) which converted a few instructions into binary or decimal code: A1.
his simple assembler program was then rewritten in its just-defined assembly language but with extensions that would enable the use of some additional mnemonics for more complex operation codes.
The enhanced assembler's source program was then assembled by its predecessor's executable (A1) into binary or decimal code to give A2, and the cycle repeated (now with those enhancements available),
until the entire instruction set was coded, branch addresses were automatically calculated, and other conveniences (such as conditional assembly, macros, optimisations, etc.) established.
This was how the early assembly program SOAP (Symbolic Optimal Assembly Program) was developed.
Compilers, linkers, loaders, and utilities were then coded in assembly language,
 further continuing the bootstrapping process of developing complex software systems by using simpler software.</p>
        
<input type="text" name='sass' value={sass} placeholder='sass' onchange={this.handleChange} />
<h1>2nd course</h1>
<p>Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
SassScript is the scripting language itself.Sass consists of two syntaxes. The original syntax,
called "the indented syntax," uses a syntax similar to Haml.[2] It uses indentation to separate code blocks and newline characters to separate rules.
The newer syntax, "SCSS" (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. 
The indented syntax and SCSS files are traditionally given the extensions.
sass and .scss, respectively.CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them.
Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages,
particularly object-oriented languages, but that are not available to CSS3 itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file.
The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .
css file whenever the .sass or .scss file is saved.[3]
The indented syntax is a metalanguage. SCSS is a nested metalanguage, as valid CSS is valid SCSS with the same semantics.
SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.</p>

<input type='text' name='flexbox' value={flexbox} placeholder='flexbox' onchange={this.handleChange} />
       
<input type="submit" value="Submit" />
</form>
      </div>
    )
  }
}

export default App;
