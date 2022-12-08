/**
* The Component Parent
*/

class Component {
  name:string;
  model: {};
  constructor ({ name,model,}: {name:string, model: {} })
  
  {
    this.name = name;
    this.model = model;
  }

  render() :HTMLElement {
    return document.createElement ('');
  }
};

export default Component