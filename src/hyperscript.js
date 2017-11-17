import React from 'react';

//Html elements
var html_elements = ['div', 'span', 'button', 'b', 'i', 'a'];

//Hyperscript method
var hyperscript = function(tag, props, children)
{
  //Check the number of arguments
  if(arguments.length === 2)
  {
    //Initialize an empty children object
    children = [];
  }
  else if(arguments.length < 2)
  {
    //Throw error and exit
    throw new Error('Expected at least 2 arguments in hyperscript constructor');
  }

  //Check the children list
  if(Array.isArray(children) === false){ children = [ children ]; }

  //Check the arguments length
  if(arguments.length > 3)
  {
    //For each argument in the list
    for(var i = 3; i < arguments.length; i++)
    {
      //Check the argument type
      if(typeof arguments[i] === 'object' && Array.isArray(arguments[i]) === true)
      {
        //Concatenate to the children array
        children = children.concat(arguments[i]);
      }
      else if(typeof arguments[i] !== 'undefined')
      {
        //Append to the children array
        children.push(arguments[i]);
      }
    }
  }

  //Parse the props
  if(typeof props === 'object' && props !== null)
  {
    //Parse the className property
    if(typeof props.className === 'object' && Array.isArray(props.className) === true)
    {
      //Join all the classnames
      props.className = props.className.join(' ');
    }
  }

  //Create the element
  var args = [ tag, props ].concat(children);

  //Call the create element method
  return React.createElement.apply(null, args);
};

//Create an element alias
html_elements.forEach(function(tag)
{
  //Register the element alias function
  hyperscript[tag] = function()
  {
    //Convert the arguments to array
    var args = Array.prototype.slice.call(arguments);

    //Add the tag name
    args.unshift(tag);

    //Call the hyperscript method with this arguments
    return hyperscript.apply(null, args);
  }
});

//Exports the hyperscript object
export default hyperscript;
