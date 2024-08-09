import ArcComponent from "../core/Arc.js";
import { html } from "../core/htmlParser.js";
import "../examples/ChildComponent.js"; // Import child component
export default class App extends ArcComponent {
  static componentName = "app"; // Define the component name

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "This is a dynamic message",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button clicked");
    this.setState({ count: this.state.count + 1, message: "button clicked" });
  }
  onInit() {
    console.log("Component initialized");
  }

  onRefresh(prevProps, prevState) {
    console.log("Component updated");
  }

  onCleanup() {
    console.log("Component will unmount");
  }
  render() {
    console.log("App state:", this.state);
    return html`
      <div data-component="app">
        <h1>Hello, Arc Node!</h1>
        <button data-action="handleClick">Increase Count</button>
        <child-component
          message="${this.state.message}"
          count="${this.state.count}"
        ></child-component>
      </div>
    `;
  }

  // onInitialize() {
  //   super.onInitialize();
  //   console.log("App component initialized");
  // }
  //
  // onUpdate(prevProps, prevState) {
  //   super.onUpdate(prevProps, prevState);
  //   console.log("App component updated");
  // }
}

// Register the component
App.registerComponent("app");