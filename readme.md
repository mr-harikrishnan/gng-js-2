# DOM (Document Object Model)

## What is DOM?

DOM is a programming interface for web documents.  
It lets programmers change the structure, style, and content of a web page.  
The document is represented as nodes and objects.

---

## What is `window`?

`window` is the global object in a browser.  
It includes the screen and all the content loaded in the browser.

---

## What is `document`?

`document` is part of the `window` object.  
It represents the content of the web page.

## -----------------------------------------------------

# DOM Notes

## DOM Tree Structure

- The document is built like a **tree structure**.
- Each part of the web page (tags like `<div>`, `<p>`, `<img>`, etc.) is a **node**.
- You can **travel** (traverse) the tree in any direction to find and modify elements.

---


## Get Elements by Tag Name

javascript
document.getElementsByTagName("img");

## --------------------------------------------------------------------------------------------------------------------------

# Dynamic DOM Manipulation

## Overview

This example demonstrates how to dynamically create and add elements to a webpage using JavaScript. By manipulating the **DOM (Document Object Model)**, developers can change the structure, style, and content of a webpage even after it has loaded.

## How It Works

In this example, we are creating a new **`<h1>`** element and adding it to the webpage.

1. **Creating an Element**: 
   - JavaScript provides the `document.createElement()` method, which allows developers to create new HTML elements dynamically. In this case, we're creating an `<h1>` element.

2. **Setting Content**: 
   - The `innerText` property is used to set the text content of the newly created element. Here, we're setting the text to "Good morning".

3. **Appending the Element**:
   - The `appendChild()` method is used to add the newly created element to the webpage. In this case, the `<h1>` element is added to the body of the document, making it visible on the page.

## Key Concepts

- **`document.createElement()`**: Creates a new HTML element.
- **`innerText`**: Sets the text content of an element.
- **`appendChild()`**: Adds an element to the DOM, making it part of the webpage.

## Conclusion

By using the DOM to manipulate a webpage dynamically, we can create interactive and dynamic web applications. This is just a simple example of how to work with the DOM in JavaScript. With this knowledge, developers can create much more complex and interactive features on their web pages.

## ---------------------------------------------------------------------------------------------------------------------------

# DOM Manipulation Example

This example shows how to use JavaScript to manipulate the DOM.

1. A new `<h1>` element is created using `document.createElement()`.
2. The text "Good morning" is added to the `<h1>` element.
3. The new `<h1>` element is added to the webpage using `appendChild()`.

When the page loads, you'll see a heading saying "Good morning".

## Conclusion

This demonstrates how JavaScript can dynamically modify a webpage by adding new elements to the DOM.

## --------------------------------------------------------------------------------------------------------------------------

# DOM Manipulation: `getElementById`

This example demonstrates how to use JavaScript to access and modify an HTML element using `getElementById`.

## How It Works

1. The HTML contains an `<h1>` element with an `id` of `head`.
2. Using JavaScript, the `document.getElementById("head")` method is used to access the `<h1>` element by its `id`.
3. The `innerText` property changes the text content of the `<h1>` element from "Hello world!" to "Good Morning!".

## Conclusion

This example shows how you can dynamically access and modify an element on a webpage using its `id`. It's a basic but powerful method for interacting with the DOM.

## ----------------------------------------------------------------------------------------------------------------------------

# DOM Manipulation: Applying Styles Using JavaScript

This example shows how to dynamically create an element and apply styles to it using JavaScript.

## How It Works

1. A new `<div>` element is created using `document.createElement("div")`.
2. Styles are applied to the new element using the `style` property:
   - **Height** and **Width** are set to 100px.
   - The **background color** is set to blue.
3. The text "this is box" is added inside the `<div>` element.
4. The new `<div>` element is added to the webpage using `appendChild()`.

## Conclusion

This demonstrates how you can create elements and style them dynamically using JavaScript. It's a useful method for adding interactive content to web pages.

## ------------------------------------------------------------------------------------------------------------------------------

# DOM Practice: Creating a Page Layout with JavaScript

This example demonstrates how to use JavaScript to build and style a simple webpage layout dynamically using the DOM.

## What It Does

1. **Removes Default Spacing**  
   - The `body` margin and padding are set to `0` for a clean layout.

2. **Creates a Container**  
   - A `div` element is created to hold all the content.

3. **Builds a Header Section**  
   - A blue header `div` is created with padding.
   - Inside the header, a centered white `<h1>` is added with the text **"HEADING"**.

4. **Adds an Image**  
   - An image is added below the header.
   - The image takes full width and has a top margin.

5. **Displays the Content**  
   - The container with the header and image is added to the webpage.

## Summary

This example shows how to:
- Create multiple elements dynamically
- Set attributes like `src` for images
- Apply styles using JavaScript
- Build a basic webpage layout without writing HTML content manually

It's a great way to practice DOM creation and styling with JavaScript only.

## ------------------------------------------------------------------------------------------------------------------------------

# DOM Project: Generating Random Colorful Boxes

## Overview

This project uses JavaScript to dynamically generate 100 colorful and randomly sized boxes on a webpage.

## How It Works

- A `for` loop runs 100 times to create 100 boxes.
- Each box is a `div` element with:
  - A random **width** and **height**
  - A random **border radius** for different shapes
  - A random **background color** using RGB values
  - A small margin for spacing

- All boxes are added to the webpage using `appendChild`.

## Key Concepts

- **Random Numbers**: Used to vary the size and color of each box.
- **DOM Manipulation**: `document.createElement` and `appendChild` are used to create and display the boxes.
- **Inline Styling**: Styles are applied directly to each element with JavaScript.

## Result

When the page loads, it displays 100 unique, colorful shapes, each with random sizes and rounded corners. This creates a visually interesting and playful layout.

## Purpose

This is a creative exercise for practicing:
- Loops in JavaScript
- Random number generation
- Dynamic DOM manipulation
- Styling elements using JavaScript

## ------------------------------------------------------------------------------------------------------------------------------

# DOM Project: Add Circles and Squares with Buttons

## Overview

This project creates two buttons that allow users to add colorful shapes (circles and squares) to a webpage using JavaScript and DOM manipulation.

## How It Works

- There are two buttons on the page:
  1. **CIRCLE ADD** – Adds a colorful, randomly sized **circle**
  2. **SQUARE ADD** – Adds a colorful, randomly sized **square**

- Each shape has:
  - Random **width** and **height**
  - Random **background color** using RGB values
  - A small **margin** for spacing

## Circle Button

- When clicked, it creates a `div` with:
  - Random width and height
  - `border-radius` set (to make it a circle or rounded shape)
  - Random background color

## Square Button

- When clicked, it creates a `div` with:
  - Random width and height
  - No border radius (square or rectangle)
  - Random background color

## Purpose

This project helps you practice:
- Handling button click events
- Creating elements with JavaScript
- Applying dynamic styles
- Generating random values
- Working with functions and event listeners

## Result

Users can click the buttons to add fun, randomly styled shapes to the page. Each shape is unique in size and color.

## -----------------------------------------------------------------------------------------------------------------

# DOM Project: Mouse Events with Buttons

## Overview

This project demonstrates various **mouse events** in JavaScript using buttons.  
Each button is linked to a different type of mouse interaction, and when triggered, an alert message is shown.

## Buttons and Events

1. **Right Click**  
   - Triggers on right-click using `oncontextmenu`.

2. **Double Click**  
   - Triggers when the button is double-clicked using `ondblclick`.

3. **Mouse Down**  
   - Fires when the mouse button is pressed using `onmousedown`.

4. **Mouse Enter**  
   - Fires when the mouse pointer enters the button using `onmouseenter`.

5. **Mouse Leave**  
   - Fires when the pointer leaves the button using `onmouseleave`.

6. **Mouse Move**  
   - Fires when the pointer moves over the button using `onmousemove`.

7. **Mouse Out**  
   - Similar to `mouseleave`, but also triggers when leaving child elements.

8. **Mouse Over**  
   - Fires when the pointer is over the button using `onmouseover`.

9. **Mouse Up**  
   - Fires when the mouse button is released using `onmouseup`.

## Purpose

This example helps in understanding how different **mouse events** work in the DOM and how they can be used to make web pages interactive.

## Conclusion

By practicing these events, developers can add custom behaviors to elements based on how users interact with them using a mouse.

## -----------------------------------------------------------------------------------------------------------------


This is a simple 3x3 `Tic-Tac-Toe` board made using JavaScript and DOM.
It creates the layout and handles player turns using only code.

## How It Works **
A container is created using JavaScript.

9 square boxes are added inside the container.

Players click on boxes to add "X" and "O", taking turns.

Boxes can't be clicked twice.

Hovering over a box changes its background color.

## Features **
✅ Create grid using JavaScript

✅ Switch between "X" and "O"

✅ Prevent overwriting moves

✅ Hover effect on boxes

## Code Concepts
document.createElement() – creates HTML elements

appendChild() – adds elements to the page

onclick – handles click events

onmouseenter and onmouseleave – handle hover

## ---------------------------------------------------------------------------------------------------
