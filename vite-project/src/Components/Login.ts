import Component from "../Lib/component";
import Elements from "../Lib/elements";

class LoginComponent extends Component {
  constructor () {
    super({
      name: 'Login',
      model: {},
    })
  }

render() {

  const loginContainer = document.createElement('div');
  loginContainer.appendChild(
    Elements.createHeader({
       textContent: 'Welcome to this page.'})
  )
  return loginContainer;

}
}

export default LoginComponent;
