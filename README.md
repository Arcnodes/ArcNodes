# ArcNode

ArcNode is an experimental minimalist and simplified UI lib for creating  web applications using pure JavaScript. It includes core concepts of components, state management. This documentation provides an overview of how to use ArcNode, including installation, basic usage, and advanced features.

## Features

- Component-based architecture
- State management
- Dynamic rendering and nested components

## Getting Started

## Installation

To install ArcNode, use npm:

```bash
npm install arc-nodes
```

To create project by ArcNode, use npm:

```bash
npm npm exec create-arcnode <project-name>
or
npm npm create-arcnode <project-name>
```

# example

```bash
npm npm exec create-arcnode my-app
or
npm npm create-arcnode my-app
```

Run the server:

```bash
npm start
```

## Getting Started

Create a basic project structure with the following:

```plaintext
my-project/
├── dist/
│   └── bundle.js
├── src/
│   └── index.js
├── index.html
└── package.json
```

# Arc Component System

Welcome to the Arc Component System! This guide will help you understand how to use the component system, manage nested components, pass props, and leverage the lifecycle methods provided.

## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Nested Components](#nested-components)
- [Passing Props](#passing-props)
- [Lifecycle Methods](#lifecycle-methods)
- [Example](#example)

## Introduction

The Arc Component System allows you to create, register, and render components with a simple and flexible API. It provides a way to manage component state, handle updates, and manage nested components with an easy-to-understand lifecycle.

## Basic Usage

### Creating a Component

To create a new component, extend the `ArcComponent` class and define the `render` method. Use the static `registerComponent` method to register the component with a name.

```javascript
import { ArcComponent, html } from "arc-nodes";
export default class MyComponent extends ArcComponent {
  constructor(props) {
    super(props);
    this.state = {
      /* Initial state */
    };
  }

  render() {
    return html`
      <div>
        <p>${this.props.message}</p>
      </div>
    `;
  }
}

// Register the component
MyComponent.registerComponent("my-component");
```

## Nested Components

### Defining Nested Components

Nested components can be included in the `render` method of another component. Ensure that all components are registered before rendering.

```javascript
import { ArcComponent, html } from "arc-nodes";
import "./MyChildComponent.js"; // Import child component

export default class ParentComponent extends ArcComponent {
  static componentName = "parent-component";

  render() {
    return html`
      <div>
        <h1>Parent Component</h1>
        <my-child-component></my-child-component>
      </div>
    `;
  }
}

// Register the component
ParentComponent.registerComponent("parent-component");
```

### Rendering Nested Components

Nested components will be automatically rendered if their parent component is rendered using `renderComponent`.

## Passing Props

### Defining Props

Props can be passed to components using attributes in the HTML. Inside the component, access props via `this.props`.

```javascript
import { ArcComponent, html } from "arc-nodes";
export default class MyComponent extends ArcComponent {
  render() {
    return html`
      <div>
        <p>${this.props.message}</p>
        <p>Count: ${this.props.count}</p>
      </div>
    `;
  }
}

// Register the component
MyComponent.registerComponent("my-component");
```

### Using Props

When using the component, pass props as attributes:

```html
<my-component message="Hello, World!" count="5"></my-component>
```

## Lifecycle Methods

### Overview

Lifecycle methods in Arc Component System are used to hook into various stages of a component's lifecycle. Here's how they work:

- `initialize()`: Called once when the component is first created.
- `onUpdate(prevProps, prevState)`: Called whenever the component updates.
- `onDestroy()`: Called just before the component is removed from the DOM.

### Example Usage

```javascript
import { ArcComponent, html } from "arc-nodes";

export default class MyComponent extends ArcComponent {
  static componentName = "my-component";

  initialize() {
    console.log("Component initialized");
  }

  onUpdate(prevProps, prevState) {
    console.log("Component updated");
  }

  onDestroy() {
    console.log("Component destroyed");
  }

  render() {
    return html`
      <div>
        <p>${this.props.message}</p>
      </div>
    `;
  }
}

// Register the component
MyComponent.registerComponent("my-component");
```

### Lifecycle Methods in Action

- `initialize()`: Called when the component is first mounted.
- `onUpdate(prevProps, prevState)`: Called each time the component updates due to state or prop changes.
- `onDestroy()`: Called just before the component is removed from the DOM.

## Example

Here's a complete example demonstrating the usage of a parent component with nested child components, passing props, and utilizing lifecycle methods.

### Parent Component

```javascript
import { ArcComponent, html } from "arc-nodes";
import "./ChildComponent.js";

export default class ParentComponent extends ArcComponent {
  static componentName = "parent-component";

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return html`
      <div>
        <h1>Parent Component</h1>
        <button data-action="handleClick">Increase Count</button>
        <child-component count="${this.state.count}"></child-component>
      </div>
    `;
  }

  initialize() {
    console.log("Parent component initialized");
  }

  onUpdate(prevProps, prevState) {
    console.log("Parent component updated");
  }

  onDestroy() {
    console.log("Parent component destroyed");
  }
}

// Register the component
ParentComponent.registerComponent("parent-component");
```

### Child Component

```javascript
import { ArcComponent, html } from "arc-nodes";

export default class ChildComponent extends ArcComponent {
  render() {
    return html`
      <div>
        <p>Count in child: ${this.props.count}</p>
      </div>
    `;
  }

  initialize() {
    console.log("Child component initialized");
  }

  onUpdate(prevProps, prevState) {
    console.log("Child component updated");
  }

  onDestroy() {
    console.log("Child component destroyed");
  }
}

// Register the component
ChildComponent.registerComponent("child-component");
```

---

## DEVELOPMENT

### Prerequisites

To run this project, you'll need:

- A web browser
- A local web server (optional, for better experience)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arwysyah/ArcNode.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ArcNode
   npm install
   ```

## Note

This library is a work-in-progress and not yet complete. It aims to mimic some of React's functionality using pure JavaScript. Some features may be incomplete or not fully tested. Use it for educational purposes or for experimentation.
