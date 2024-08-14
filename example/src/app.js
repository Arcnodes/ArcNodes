import { ArcComponent, html } from "../../src";

export default class App extends ArcComponent {
  constructor(props) {
    super(props);
    this.mutableState = {
      count: 0,
      message: "Welcome to ArcNodes!",
      data: { test: "1" },
      response: ["1", "2"],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.applyChanges((prev) => ({
      count: prev.count + 1,
      message: `You've clicked ${prev.count + 1} time(s)!`,
    }));
    this.applyChanges((prev) => {
      return {
        ...prev,
        data: { ...prev.data, ...{ test2: "2" } },
      };
    });
  }
  initialize() {
    console.log("Initialize equal to didmount");
  }
  onDidUpdate(prevProps, prevState) {
    console.log("Did Update");
  }

  render() {
    return html`
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

        body {
          margin: 0;
          font-family: "Roboto", sans-serif;
          background-color: #000;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }
        .app-container {
          width: 100%;
          text-align: center;
          padding: 50px;
          background: linear-gradient(135deg, #000, #333);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }
        .fade-in {
          animation: fadeIn 2s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .rotating-text {
          font-size: 40px;
          color: #ff4081;
          animation: rotateText 10s infinite linear;
          padding-bottom: 70px;
        }
        @keyframes rotateText {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .running-text {
          position: absolute;
          bottom: 20px;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .running-text p {
          display: inline-block;
          padding-left: 100%;
          animation: runText 30s linear infinite;
          color: #6200ea;
          font-size: 18px;
        }
        @keyframes runText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .hero-title {
          font-size: 50px;
          margin-bottom: 20px;
          color: #ff4081;
          text-transform: uppercase;
        }
        .hero-description {
          font-size: 20px;
          margin-bottom: 50px;
          line-height: 1.5;
          color: #ccc;
          text-align: center;
          max-width: 1000px;
        }
        .cta-button {
          background-color: #6200ea;
          color: white;
          padding: 15px 40px;
          font-size: 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }
        .counter {
          font-size: 30px;
          color: #ff4081;
          margin-top: 30px;
          font-weight: bold;
        }
      </style>

      <div class="app-container">
        <div style="font-size : 40px; font-weight:bold">ArcNodes</div>
        <h1 class="hero-title">${this.mutableState.message}</h1>
        <p class="hero-description">
          "ArcNodes is a straightforward library designed to help you build web
          applications. While it is still in early development, it offers a
          foundation for creating simple and functional user interfaces. The
          framework aims to provide an easy-to-use approach for developing
          interactive components and layouts. As development progresses,
          additional features and improvements will be added to enhance its
          capabilities."
        </p>
        <button class="cta-button" data-action="handleClick">Click Me</button>
        <p class="counter">
          You've clicked ${this.mutableState.count} time(s)!
        </p>

        <Child
          data=${this.mutableState.data}
          counter=${this.mutableState.count}
          resmen=${this.mutableState.response}
          componentKey="Child"
         
        ></Child>
        <div class="footer">
          Made with ❤️ by the ArcNodes Team. Join us on GitHub to contribute and
          collaborate!
        </div>
      </div>
    `;
  }
}

class Child extends ArcComponent {
  constructor(props) {
    super(props);
    this.state = {
      myCounter: 0,
    };
  }

  handleClick = () => {
    this.applyChanges({
      myCounter: (this.state.myCounter += 1),
    });
  };
  initialize() {
    // const files = JSON.parse(this.props.data);
    // const counte = JSON.parse(this.props.counter)
    // const res = JSON.parse(this.props.resmen)

    this.applyChanges({
      myCounter: this.props.counter,
    });
    console.log(this.props);
  }

  render() {
    // const files = JSON.parse(this.props.data);
    return html`
      <div>
        <h1>Counter: ${this.mutableState.myCounter}</h1>
      <button data-action="handleClick">click</button>
      </div>
    `;
  }
}
Child.registerComponent("Child");

App.registerComponent("app");