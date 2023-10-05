export const cursesType = {
    REACT: 'React',
    TYPESCRIPT: 'TypeScript',
    JAVASCRIPT: 'Javascript',
    NONE: ''
}

export const questions = {
    react: [
        {
            question: "Explain the differences between controlled and uncontrolled components in React.",
            answer: "Controlled components have their state controlled by React. For example, an input element's value is controlled by using the `value` prop, and the input's change event updates the state. On the other hand, uncontrolled components store their state in the DOM itself, typically using `refs` to get their current value when needed."
        },
        {
            question: "Describe React's reconciliation process.",
            answer: "Reconciliation is the process through which React updates the DOM. When a component's state or props change, a new virtual DOM tree is created. React then compares this new tree with the previous tree using a 'diffing' algorithm to determine the most efficient way to update the real DOM."
        },
        {
            question: "How do React hooks differ from class-based components, and why were they introduced?",
            answer: "Hooks allow state and lifecycle methods in functional components, simplifying code and avoiding this. They promote reusability without complex patterns like HOCs. Introduced to reduce confusion from classes and enhance component composition."
        },
        {
            question: "How would you optimize a large list rendering in React?",
            answer: "To optimize large list rendering: Use `React.memo` to avoid unnecessary renders, use a virtualized list, with libraries like `react-window`, that only renders the items in the viewport, implement pagination or lazy-loading, and avoid inlining function handlers in the rendered list items."
        },
        {
            question: "Describe the differences between `forwardRef` and `refs` in React.",
            answer: "While `refs` are used to access the DOM nodes or React elements directly, `forwardRef` is a technique that allows a parent component to pass its ref to a child component. This is particularly useful in higher-order components, or when you need to access a child's DOM node in a parent component."
        },
        {
            question: "What is the importance of keys in a React list?",
            answer: "Keys help React identify changes, additions, or deletions to the items in a list. Using stable, predictable, and unique keys ensures that the DOM updates optimally, preserving state and maintaining focus."
        },
        {
            question: "How would you handle global state management without using any libraries like Redux or MobX?",
            answer: "One can handle global state using React's context API combined with useReducer hook or useState hook. Create a context for the global state and use a provider to wrap the application or part of it. Components can then consume the context or dispatch actions to modify the state."
        },
        {
            question: "How do you handle side-effects in your React components?",
            answer: "Side-effects, like data fetching or manual DOM manipulations, can be managed using the `useEffect` hook in functional components. In class-based components, they can be handled using lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`."
        },
        {
            question: "Explain the difference between `useState` and `useReducer`.",
            answer: "`useState` is a hook to manage simple state logic, whereas `useReducer` is suited for more complex state logic that involves previous states or when the next state depends on the previous one. `useReducer` is also preferable when managing state of large components or when the state shape is more complex."
        },
        {
            question: "Describe how React’s context API works and when you’d use it.",
            answer: "React’s context API allows for managing state/data and passing it deep down the component tree without passing props manually at every level. It consists of `React.createContext`, `Provider`, and `Consumer` (or the `useContext` hook). The API is particularly useful when data needs to be accessible by many components at different nesting levels, like themes or user authentication."
        },
        {
            question: "How can you create a React component without using the JSX syntax extension?",
            answer: "React components can be created without JSX by directly using the `React.createElement` function. For instance, `return React.createElement('div', null, 'Hello, this is a component without JSX!');`. While possible, JSX offers a more readable and expressive syntax for UI structure."
        },

        {
            question: "What are React Portals and where would you use them?",
            answer: "React Portals provide a way to render children into a DOM node outside of the parent's DOM hierarchy, as commonly found in the case of modals, pop-ups, or tooltips. They are used when a parent component has an `overflow: hidden` or `z-index` style, but you need the child to visually 'break out' of its container."
        },
        {
            question: "How does React's virtual DOM work and how does it increase performance?",
            answer: "The virtual DOM is a lightweight in-memory representation of the actual DOM elements. When changes occur in a React app, they first reflect on the virtual DOM. Then, React compares (diffs) the current virtual DOM with the previous one using a reconciliation algorithm and updates only the real DOM nodes that changed. This diffing process reduces unnecessary DOM updates, thereby increasing performance."
        },
        {
            question: "Explain the concept of Higher-Order Components (HOC).",
            answer: "A Higher-Order Component (HOC) in React is a pattern derived from functional programming. It's a function that takes a component and returns a new component with additional props or behaviors. HOCs are used for code reuse, logic abstraction, and prop manipulation, allowing developers to write cleaner and more modular code."
        },
        {
            question: "What is React Server-Side Rendering (SSR) and why is it beneficial?",
            answer: "SSR means rendering React components on the server rather than in the browser. The rendered HTML is then sent to the client. This approach enhances initial page load times, provides a better SEO, and improves performance on slow internet connections. However, it adds complexity to the app setup."
        },
        {
            question: "What are React Fragments and why would you use them?",
            answer: "React Fragments allow a component to return multiple child elements without adding an extra node to the DOM. It helps in cases where adding a wrapping div would break styling or semantics, and it can lead to a less cluttered DOM and improved performance."
        },
        {
            question: "Explain React's Concurrent Mode. How does it enhance user interfaces?",
            answer: "Concurrent Mode is an advanced feature in React that enables the ability to interrupt a rendering process to prioritize other urgent tasks, like user input. This ensures that the app remains responsive and provides a smoother user experience by avoiding 'jank' or blocking of the main thread."
        },
        {
            question: "How would you handle error boundaries in React?",
            answer: "Error boundaries in React are components that catch JavaScript errors in their child component tree, log them, and display a fallback UI. They're introduced using lifecycle methods like `componentDidCatch` and `static getDerivedStateFromError` to catch errors and set local state, allowing graceful degradation of the user interface in case of errors."
        },
        {
            question: "Explain the significance of `props.children` in React.",
            answer: "`props.children` is a special prop in React that allows components to receive and render other components or elements passed between the opening and closing tags. It's useful for creating wrapper components or components like modals and tooltips."
        },
        {
            question: "What are the differences between React's `PureComponent` and `Component` classes?",
            answer: "`PureComponent` is similar to `Component`, but it implements `shouldComponentUpdate` with a shallow prop and state comparison. This helps in preventing unnecessary renders, offering better performance for certain scenarios."
        },
        {
            question: "How can you ensure that a component only re-renders when specific props change?",
            answer: "You can use the `React.memo` higher-order function for functional components or implement `shouldComponentUpdate` in class components to compare current and next props, and decide if the component should re-render."
        },
        {
            question: "What is prop drilling and how can you avoid it in React?",
            answer: "Prop drilling refers to the process of passing props down multiple levels of components, even if intermediate components don't use them. It can be avoided using context, state management libraries like Redux, or by restructuring the component tree."
        },
        {
            question: "Explain the role of React's `useState` hook.",
            answer: "`useState` is a hook that allows functional components to use state. It returns an array with the current state value and a function to update it. It provides a simpler alternative to `this.state` and `this.setState` in class components."
        }, {
            question: "Why is it advised to pass functions or objects to `useState` or `useReducer` instead of directly setting a value?",
            answer: "When the new state depends on the previous state, passing a function ensures that updates are sequential and avoids potential state inconsistencies due to batched updates."
        },
        {
            question: "Describe the purpose and usage of 'refs' in React.",
            answer: "Refs provide a way to access DOM nodes or React elements directly. They can be used for focus management, animations, integrating with third-party libraries, or anytime direct access is necessary. `useRef` is the hook that provides this capability in functional components."
        },
        {
            question: "What are side effects, and how are they handled in React?",
            answer: "Side effects in React are operations that affect external systems, like data fetching, manual DOM manipulations, or subscriptions. They can be managed using the `useEffect` hook in functional components."
        },
        {
            question: "What is the difference between `useState` and `useRef` when storing values?",
            answer: "`useState` causes a re-render when the state changes, whereas `useRef` doesn’t. `useRef` retains its value across renders and is useful for storing refs and mutable values without causing re-renders."
        },
        {
            question: "How do you handle component styling in your React projects?",
            answer: "Component styling can be managed using CSS modules, styled-components, inline styles, or other CSS-in-JS libraries. Each approach has its pros and cons, and the choice often depends on project requirements."
        },
        {
            question: "How can you handle animations in React?",
            answer: "Animations in React can be managed using CSS transitions, the Web Animations API, or libraries like `react-transition-group` or `react-spring`. These tools provide more control over complex animations and transitions."
        },
        {
            question: "Explain the difference between `mounting`, `updating`, and `unmounting` phases in React component's lifecycle.",
            answer: "Mounting is the phase when a component is being inserted into the DOM. Updating occurs when changes are detected in props or state. Unmounting refers to the phase when the component is being removed from the DOM."
        },
        {
            question: "What is React's `StrictMode` and when would you use it?",
            answer: "`StrictMode` is a wrapper component that checks for potential problems in the application during development. It helps in identifying unsafe lifecycles, legacy API usage, and other best practices to make sure the app is more maintainable."
        },
        {
            question: "How would you design a large-scale React application to ensure code-splitting and optimal performance?",
            answer: "Leverage dynamic imports and React.lazy to enable code splitting and route-based chunking. Use Webpack's splitChunks to create optimized bundles. Employ techniques like prefetching or preloading resources for anticipated interactions."
        },
        {
            question: "Explain the differences and use-cases between `memo`, `useMemo`, and `useCallback`.",
            answer: "`memo` is for preventing unnecessary renders in functional components. `useMemo` caches the result of expensive function calls. `useCallback` memorizes a callback function, ensuring the same reference across renders. They all optimize performance by reducing recalculations or re-renders."
        },
        {
            question: "How do you handle cross-cutting concerns in a React application, like logging or analytics?",
            answer: "Cross-cutting concerns can be managed using Higher-Order Components (HOCs), custom hooks, or decorators. For example, an analytics HOC or hook can wrap components and automatically log specific events or interactions."
        },
        {
            question: "How do you ensure type safety in your React applications?",
            answer: "Integrate static type checkers like TypeScript or Flow. Define prop types for components, leverage utility types, and ensure consistent type definitions across the codebase. Employ strict type-checking options and handle edge cases."
        },
        {
            question: "Discuss the importance and mechanisms of state normalization when using Redux or other state management libraries.",
            answer: "State normalization flattens nested data structures, reducing redundancy and facilitating efficient updates. It simplifies the management of relational data and aids in preventing nested renders, leading to more consistent and optimized performance."
        },
        {
            question: "How would you handle theming and multiple design systems in a large React application?",
            answer: "Leverage React's context API or styled-components' ThemeProvider for theming. Define theme variables (e.g., colors, spacings) and switch between themes dynamically. For multiple design systems, modularize components and styles, and use package management for shared components."
        },
        {
            question: "How do you ensure the accessibility (a11y) of your React applications?",
            answer: "Use semantic HTML, manage focus for interactive elements, and utilize ARIA roles/attributes. Test with accessibility tools like Axe or Lighthouse and ensure keyboard navigation. Consider libraries like `react-a11y` for warnings during development."
        },
        {
            question: "Explain the concept of 'Lifting State Up' in React. Why is it important?",
            answer: "'Lifting State Up' involves moving shared state to a common ancestor component, ensuring data consistency across child components. It promotes unidirectional data flow, making state changes more predictable and easier to debug."
        },
        {
            question: "How do you measure and optimize the performance of a React application?",
            answer: "Profile components with React DevTools' Profiler. Use tools like Lighthouse or WebPageTest for holistic performance metrics. Optimize by code-splitting, memoization, reducing re-renders, and optimizing static assets. Monitor real-user metrics for ongoing performance."
        },
        {
            question: "Explain the concept of React Fiber. How does it enhance the responsiveness of user interfaces?",
            answer: "Fiber is React's reimplementation of its core reconciliation algorithm. It enables incremental rendering, allowing React to split rendering work into chunks and spread it out over multiple frames. It prioritizes user interactions, making applications more responsive and capable of achieving smoother animations."
        },
        {
            question: "In a React-Redux application, how would you handle side-effects or asynchronous actions?",
            answer: "For handling side-effects in a React-Redux app, middlewares like Redux Thunk, Redux Saga, or Redux Observable can be used. They provide a structured way to manage asynchronous actions and extend Redux's capabilities, making asynchronous flows more readable and maintainable."
        },
        {
            question: "What strategies would you use to test React components?",
            answer: "Unit tests with Jest combined with testing utilities like React Testing Library or Enzyme. Mock API calls and dependencies, write snapshot tests to detect unintentional changes, and employ end-to-end tests using tools like Cypress for holistic user-flow validation."
        },
        {
            question: "How would you handle localization or internationalization in React applications?",
            answer: "Leverage libraries like `react-i18next` or `react-intl` to provide translations based on user preferences or locale. Store translations in structured files, use context or hooks for language switching, and ensure date, time, and number formatting are localized."
        },
        {
            question: "Discuss how to handle optimistic updates in a React application.",
            answer: "Optimistic updates involve updating the UI optimistically before receiving a server response. If the server response is successful, no further actions are taken. If it fails, the UI is rolled back. This can be implemented using state management tools like Redux by maintaining a previous state snapshot to revert if needed."
        },
        {
            question: "How would you approach building a real-time feature (like a chat) in a React application?",
            answer: "Use WebSockets or third-party services like Socket.io to establish a bi-directional communication channel. In React, manage real-time data using state and props, and consider optimizations like throttling and debouncing for better performance and user experience."
        },
        {
            question: "Explain how React batches multiple state updates and why it's beneficial.",
            answer: "React batches multiple state updates that occur in event handlers and lifecycle methods to optimize performance. By batching, React minimizes the number of renders and diff calculations, making the UI updates more efficient."
        },
        {
            question: "In a large React application, how would you ensure consistent component design and behavior?",
            answer: "Adopt a component library or design system. Use tools like Storybook to document and isolate component development. Encourage using shared components, maintain a style guide, and ensure regular code reviews to keep consistency."
        },
        {
            question: "How do you handle micro-frontends or integrating multiple React applications into a larger ecosystem?",
            answer: "Micro-frontends can be managed using module federation, frameworks like Single-SPA, or simply by using iframes. Ensure each micro-frontend is self-contained, has its own deployment pipeline, and communicates via well-defined interfaces or events. Integrate shared dependencies and manage versioning to avoid conflicts."
        },
        {
            question: "Describe a scenario where you'd use React's `useImperativeHandle` hook.",
            answer: "`useImperativeHandle` is used to customize the instance value that is exposed when using React.forwardRef. It's beneficial when encapsulating and exposing only specific methods or values of a child functional component to a parent, providing more controlled refs."
        }
    ],
    typescript: [
        {
            question: "What is TypeScript and why might you use it over regular JavaScript?",
            answer: "TypeScript is a superset of JavaScript that adds static typing. It helps in catching errors early during development, provides better tooling and autocompletion, and enhances code readability and maintainability."
        },
        {
            question: "How do you define a variable's type in TypeScript?",
            answer: "You can define a variable's type using a colon (:) followed by the type, like `let name: string;`."
        },
        {
            question: "What are the basic types available in TypeScript?",
            answer: "TypeScript includes basic types like `number`, `string`, `boolean`, `null`, `undefined`, `any`, `void`, and `array`."
        },
        {
            question: "How do you compile TypeScript into JavaScript?",
            answer: "You can use the TypeScript compiler (`tsc`) to transpile TypeScript files to JavaScript. For instance, `tsc filename.ts` will generate `filename.js`."
        },
        {
            question: "What's the difference between `let` and `var` in TypeScript?",
            answer: "Similar to JavaScript, in TypeScript `let` has block scope and `var` has function scope. Using `let` is recommended for more predictable behavior."
        },
        {
            question: "How can you define an object shape in TypeScript?",
            answer: "Object shapes can be defined using interfaces or types. For instance, `interface Person { name: string, age: number }`."
        },
        {
            question: "What's the purpose of the `any` type in TypeScript?",
            answer: "The `any` type is a flexible type that can be anything. It's useful when the type is unknown or when transitioning a JavaScript codebase to TypeScript, but overuse can negate the benefits of TypeScript."
        },
        {
            question: "How do you create an array type in TypeScript?",
            answer: "You can define an array type in two ways: `Type[]` or `Array<Type>`. For example, `number[]` or `Array<number>` both represent arrays of numbers."
        },
        {
            question: "What is a function signature in TypeScript?",
            answer: "A function signature defines how a function should look in terms of its parameters and return type. For instance, `function greet(name: string): void` has a signature that takes a string and returns nothing (`void`)."
        },
        {
            question: "What is the difference between `interface` and `type` in TypeScript?",
            answer: "While both `interface` and `type` can describe object shapes, there are subtle differences. `interface` is more extensible, supporting declaration merging. `type` is more flexible, allowing union/intersection types, primitive types, and tuple types. Generally, `interface` is used for defining shapes, and `type` for more complex type logic."
        },
        {
            question: "How does TypeScript support optional properties in an interface or type?",
            answer: "TypeScript supports optional properties by adding a `?`(question mark) after the property name in an interface or type. This indicates that the property can either have the specified type or be `undefined`."
        },
        {
            question: "Explain the utility of the `keyof` operator in TypeScript.",
            answer: "`keyof` is a TypeScript operator used to fetch the type of keys (as a union of string literals) for a given object type. It's commonly used in conjunction with mapped types or when you want to ensure a function argument is a valid key for a particular object."
        },
        {
            question: "What are Generics in TypeScript and why are they useful?",
            answer: "Generics provide a way to make components work with any data type, not just a single one, ensuring type safety without compromising flexibility. They allow developers to write reusable and generalized functions, classes, or interfaces while still maintaining type integrity."
        },
        {
            question: "How does TypeScript handle enums, and what are their benefits?",
            answer: "Enums in TypeScript allow for defining named constants, making code more readable and reducing potential errors. TypeScript supports both numeric and string-based enums. They can be used to represent a fixed set of named values, providing type safety and autocompletion."
        },
        {
            question: "Explain the purpose of the `never` type in TypeScript.",
            answer: "The `never` type represents a value that never occurs, such as a function that always throws an error or an infinite loop. It's often used in exhaustive type checks, ensuring that every possibility of a union type has been accounted for."
        },
        {
            question: "How can you achieve strict property initialization in TypeScript classes?",
            answer: "Using the `strictPropertyInitialization` flag in conjunction with the `strict` flag in the TypeScript configuration enforces that each instance property of a class gets initialized in the constructor. This helps in catching potential runtime errors during compile-time."
        },
        {
            question: "What is a Tuple in TypeScript, and how is it different from an Array?",
            answer: "A Tuple is a fixed-size array where the type of a fixed number of elements is known but need not be the same. Arrays have items of a single type, while Tuples can have multiple types. Tuples are beneficial when you want to represent, for example, a value pair with different types."
        },
        {
            question: "How does TypeScript's structural type system differ from nominal type systems?",
            answer: "TypeScript uses a structural type system, meaning type compatibility is based on the structure of types (properties and methods) rather than explicit type names. Nominal systems, found in languages like Java, require explicit type relationships."
        },
        {
            question: "How does TypeScript handle type inference, especially with the `infer` keyword?",
            answer: "TypeScript automatically determines types when there's no explicit type information provided, like with variable assignment. The `infer` keyword, used in conditional types, allows TypeScript to infer types within the scope of the true branch."
        },
        {
            question: "Describe the difference between TypeScript's `readonly` vs. `const`.",
            answer: "`const` is used for variable declarations, ensuring the variable can't be reassigned. `readonly` is used for property declarations in interfaces or classes, indicating the property can't be reassigned after construction."
        },
        {
            question: "What's the purpose of TypeScript's `namespace` and how does it compare to modules?",
            answer: "`namespace` is a TypeScript-specific way to group related code, often used to avoid global scope pollution. Modules are a more modern approach, aligning with ES6 modules, allowing better tree-shaking and are recommended for most use cases."
        },
        {
            question: "How can you use TypeScript's mapped types?",
            answer: "Mapped types allow creating new types based on existing ones by applying a transformation. They're useful for creating variations, like making all properties readonly with `Readonly<T>` or optional with `Partial<T>`."
        },
        {
            question: "What does the `unknown` type signify in TypeScript and how is it different from `any`?",
            answer: "`unknown` is a type-safe counterpart of `any`. While `any` allows any operation without type checking, operations on `unknown` are not allowed unless the type is asserted or narrowed."
        },
        {
            question: "What are Type Guards in TypeScript and how are they used?",
            answer: "Type guards are runtime checks that narrow types using conditional statements. They can be user-defined type predicates (`parameterName is Type`) or use typeof, instanceof, and in operators to ensure type safety."
        },
        {
            question: "How does the `extends` keyword work in the context of TypeScript's conditional types?",
            answer: "In conditional types, `extends` checks if a type is assignable to another. It's used as `T extends U ? X : Y`, meaning if `T` is assignable to `U`, the type is `X`, otherwise it's `Y`."
        },
        {
            question: "How can you create a private field in a TypeScript class?",
            answer: "TypeScript 3.8 introduced the `#` character to denote private fields in a class. These fields cannot be accessed outside the class they're declared in."
        },
        {
            question: "What are decorators in TypeScript and how do they enhance class functionality?",
            answer: "Decorators are a special kind of declaration that can be attached to class declarations, methods, or properties. They add metadata or modify class behaviors, similar to annotations in other languages."
        },
        {
            question: "How can TypeScript help in ensuring exhaustiveness in switch-case statements?",
            answer: "Using the `never` type, TypeScript can ensure all cases in a union type are handled in a switch-case, and if not, it can throw an error for unhandled cases."
        },
        {
            question: "What's the difference between `as` and angle-bracket type assertion in TypeScript?",
            answer: "Both are ways to do type assertions in TypeScript. However, the angle-bracket style is not allowed in JSX syntax, so `as` is preferred."
        },
        {
            question: "What is the `declare` keyword used for in TypeScript?",
            answer: "The `declare` keyword is used for ambient declarations where you want to define a variable's type without initializing it. It's commonly used in type definition files."
        },
        {
            question: "How does the `noImplicitAny` flag enhance type safety in TypeScript?",
            answer: "With `noImplicitAny` enabled, TypeScript will raise an error on expressions and declarations with an implied `any` type, enforcing developers to explicitly declare the type or allow TypeScript to infer it."
        },
        {
            question: "What are index types in TypeScript, and how are they beneficial?",
            answer: "Index types allow creating objects that are indexed in some way, e.g., dictionaries. With `keyof` and indexed access operators, you can capture and use the keys of an object type dynamically."
        },
        {
            question: "How do you define a global variable or type that can be used across multiple files in TypeScript?",
            answer: "You can use the `declare global` block within a module or use the `declare` keyword in a type declaration (`.d.ts`) file."
        },
        {
            question: "What are union and intersection types in TypeScript?",
            answer: "Union types (`TypeA | TypeB`) represent values that can be one of several types. Intersection types (`TypeA & TypeB`) combine multiple types into one, meaning a value of this type will have all the features of all the constituent types."
        },
        {
            question: "How does the `strictNullChecks` flag work in TypeScript?",
            answer: "With `strictNullChecks` enabled, `null` and `undefined` are treated as distinct types. This means you can't assign `null` or `undefined` to a variable unless you explicitly declare it of that type."
        },
        {
            question: "What's the difference between a method marked `static` and one without it in a TypeScript class?",
            answer: "A `static` method belongs to the class and can be called on the class itself, not on an instance. Non-static methods are instance methods and require class instantiation to be called."
        },
        {
            question: "How can you use string literal types in TypeScript?",
            answer: "String literal types allow you to specify that a value must be a certain string, e.g., `type Direction = 'left' | 'right';`. This can be used to simulate enums or allow for specific string values."
        },
        {
            question: "How does the `noEmitOnError` flag work in TypeScript?",
            answer: "When `noEmitOnError` is enabled, TypeScript won't generate output files (`js` or `.d.ts` files) if any errors are detected."
        },
        {
            question: "How can the `typeof` keyword be used as a type guard in TypeScript?",
            answer: "In TypeScript, `typeof` can be used in type guards to narrow down the type within conditional blocks, e.g., `if (typeof variable === 'string')` ensures `variable` is treated as a string within the block."
        },
        {
            question: "What are mixins in TypeScript, and how can they be implemented?",
            answer: "Mixins are a way to create classes from reusable components. In TypeScript, they can be implemented using functions to combine classes, adding shared behaviors to existing classes."
        },
        {
            question: "What is the difference between a `.ts` file and a `.d.ts` file in TypeScript?",
            answer: "A `.ts` file is a regular TypeScript file containing source code. A `.d.ts` file is a TypeScript declaration file used to describe the shape of an existing JavaScript module or library, without providing the actual implementation."
        },
        {
            question: "How do namespaces help in organizing TypeScript code?",
            answer: "Namespaces provide a way to logically group related code. They can help in avoiding naming collisions in the global scope, especially in larger projects or when integrating with multiple libraries."
        },
        {
            question: "How does the `--isolatedModules` flag influence TypeScript compilation?",
            answer: "The `--isolatedModules` flag ensures each module is independently transpilable. It prevents the use of constructs that can't be safely transpiled in a `preserve modules` setting, like using `const enum`."
        },
        {
            question: "What's the difference between type erasure and reflection in TypeScript?",
            answer: "Type erasure means TypeScript type annotations are removed in the compiled JavaScript, so they don't exist at runtime. Reflection would allow type information to be available at runtime. TypeScript, by default, practices type erasure."
        },
        {
            question: "How can you use TypeScript with React functional components?",
            answer: "You can type React functional components using `React.FC` or `React.FunctionComponent` generic types, and define props using an interface or a type."
        },
        {
            question: "What are tagged union types or discriminated unions in TypeScript?",
            answer: "It's a pattern where you create a union of types and use a literal type (usually a string) as a common 'tag' to discriminate between the types. This helps in type narrowing using type guards."
        },
        {
            question: "How does the `readonly` modifier ensure immutability in TypeScript?",
            answer: "The `readonly` modifier ensures that once a property is set, it cannot be changed. It's a way to enforce immutability for properties in classes, interfaces, or types."
        },
        {
            question: "What are ambient modules in TypeScript?",
            answer: "Ambient modules are a way to describe types of modules you're using, where the actual module is not written in TypeScript. It allows you to work with existing JavaScript libraries seamlessly."
        },
        {
            question: "How does the `extends` keyword function in generic constraints in TypeScript?",
            answer: "`extends` in generic constraints restricts the types you can use with a generic. For instance, `T extends U` ensures that type `T` adheres to the structure of type `U`."
        },
        {
            question: "How do you define custom decorators in TypeScript?",
            answer: "Decorators in TypeScript are functions that receive arguments related to the decorated element. Custom decorators can be defined for classes, methods, properties, or parameters, and can be used to add metadata, modify behaviors, or transform the target in some way."
        }
    ],
    javascript: [
        {
            question: "Explain the difference between `var`, `let`, and `const` in JavaScript.",
            answer: "`var` is function-scoped and can be redeclared. `let` and `const` are block-scoped. `let` can be reassigned, while `const` cannot be reassigned after initialization."
        },
        {
            question: "What is the `this` keyword in JavaScript?",
            answer: "`this` refers to the object it belongs to and can change based on the context in which a function is called."
        },
        {
            question: "What is a closure in JavaScript?",
            answer: "A closure is a function that has access to the parent scope's variables, even after the parent function has finished executing. It's a combination of a function bundled together with references to its surrounding state."
        },
        {
            question: "Describe how prototypal inheritance works in JavaScript.",
            answer: "JavaScript is prototype-based. Each object has a prototype, and when a reference to a property or method on an object is requested and it's not found on the current object, JavaScript will look up its prototype chain until it finds it or reaches an object with a null prototype."
        },
        {
            question: "Explain the difference between `==` and `===` in JavaScript.",
            answer: "`==` is a loose equality operator that performs type coercion, meaning it converts the operands to the same type before making the comparison. `===` is a strict equality operator, which returns false for different types and doesn't perform type coercion."
        },
        {
            question: "What are promises in JavaScript and how do they differ from callbacks?",
            answer: "Promises provide a more elegant way to handle asynchronous operations compared to callbacks. They represent a value that might be available now, in the future, or never. Promises have `then`, `catch`, and `finally` methods for handling the fulfilled or rejected state, avoiding 'callback hell' or deeply nested callbacks."
        },
        {
            question: "How does JavaScript's event loop work?",
            answer: "The event loop continuously checks the call stack and processes messages (like events) from a queue. It ensures asynchronous tasks like AJAX don't block the main thread."
        },
        {
            question: "Can you explain the concepts of `hoisting` in JavaScript?",
            answer: "Hoisting moves variable and function declarations to the top of their scope during compile time, but not their initializations."
        },
        {
            question: "What are ES6 template literals?",
            answer: "Template literals, enclosed by backticks, allow embedded expressions and multi-line strings without special characters."
        },
        {
            question: "What is the purpose of JavaScript's IIFE pattern?",
            answer: "IIFE, or Immediately Invoked Function Expression, runs as soon as it's defined. It's used to create a private scope and avoid polluting the global namespace."
        },
        {
            question: "How can you handle exceptions in JavaScript?",
            answer: "Using `try/catch/finally` blocks. `try` contains the code that might throw, `catch` handles the exception, and `finally` runs regardless of an exception being thrown."
        },
        {
            question: "How do arrow functions differ from traditional function expressions?",
            answer: "Arrow functions have a shorter syntax, don't have their own `this`, arguments, or super, and can't be used as constructors."
        },
        {
            question: "Explain the concept of 'destructuring' in JavaScript.",
            answer: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables. For example, `{a, b} = obj` extracts properties `a` and `b` from `obj`."
        },
        {
            question: "What's the difference between `null` and `undefined`?",
            answer: "`undefined` means a variable is declared but not assigned. `null` is an assignment value representing no value or no object."
        },
        {
            question: "How does the spread operator `...` work and where is it useful?",
            answer: "The spread operator expands iterable elements. It's used to split arrays into individual items or merge multiple objects/arrays together."
        },
        {
            question: 'What is js quick succession',
            answer: "In a JavaScript context, \"quick succession\" typically refers to rapidly repeated events or function calls that occur in a very short timeframe. This can be commonly observed in scenarios like: Rapid User Interactions, High-frequency DOM Events, Reactive Programming"
        },
        {
            question: "How can you prevent a function from being called multiple times in quick succession?",
            answer: "You can use 'debouncing'. It ensures that a function doesn't get executed until after a certain amount of time has passed since it was last called."
        },
        {
            question: "What are JavaScript Symbols?",
            answer: "Symbols are unique and immutable primitive values. They are often used as object property keys to ensure uniqueness."
        },
        {
            question: "What's the difference between a shallow copy and a deep copy of an object?",
            answer: "A shallow copy replicates the outer object, sharing references to nested objects. A deep copy replicates the outer and all nested objects, creating distinct instances."
        },
        {
            question: "What is event delegation in JavaScript?",
            answer: "Event delegation involves attaching an event listener to a parent element to manage events for child elements, utilizing event bubbling. It optimizes performance by using fewer event listeners."
        },
        {
            question: "How do JavaScript modules work?",
            answer: "Modules allow for modular and maintainable code by splitting code into smaller, reusable pieces. They encapsulate functionality, exposing only certain parts, and can be imported/exported using `import` and `export` statements."
        },
        {
            question: "What's the difference between a static method and an instance method?",
            answer: "Static methods are associated with a class, not an instance, and are called on the class itself. Instance methods are called on instances of the class and can access instance data."
        },
        {
            question: "How does the `Map` object differ from a regular object literal?",
            answer: "`Map` holds key-value pairs where keys can be of any type, maintains insertion order, and has utility methods like `set`, `get`, `has`, and `delete`. Object literals have string-only keys and don't maintain insertion order."
        },
        {
            question: "What are JavaScript Generators and how do they differ from regular functions?",
            answer: "Generators are functions that can be paused and resumed, using the `yield` keyword. They return an iterator when invoked, which can be used to control the execution."
        },
        {
            question: "How can you ensure immutability in your JavaScript applications?",
            answer: "You can ensure immutability by using methods that don't alter the original data, like `slice`, `concat`, and `Object.assign`, or using libraries like `immutable.js` or `immer`. Additionally, using `const` can prevent reassignment."
        },
        {
            question: "What are JavaScript proxies and how can they be used?",
            answer: "Proxies in JavaScript allow you to define custom behavior for fundamental operations (like property lookup, assignment, enumeration). They can be used for logging, performance measuring, data binding, and more."
        },
        {
            question: "What is the importance of tree-shaking in modern JavaScript?",
            answer: "Tree-shaking is a method of optimizing the final bundle size by eliminating dead code. It removes exports that aren't used, leading to smaller and more efficient output bundles."
        },
        {
            question: "Can you explain the concept of microtask and macrotask in the JavaScript event loop?",
            answer: "Macrotasks (like `setTimeout` or `setInterval`) and microtasks (`Promise` resolutions) are queued separately in the event loop. After each macrotask, all available microtasks are processed, ensuring promises resolve as soon as possible, before the next render or next event is handled."
        },
        {
            question: "What's the difference between 'pass by value' and 'pass by reference'?",
            answer: "Primitive types (e.g., numbers, strings) are passed by value, meaning a copy is made for functions. Objects and arrays are passed by reference, meaning the function can modify the original object/array outside its scope."
        },
        {
            question: "How can you achieve memoization in JavaScript?",
            answer: "Memoization is storing the results of expensive function calls and returning the cached result when the same inputs occur. It can be achieved using closures or libraries like `lodash`'s `memoize` function."
        },
        {
            question: "Describe the importance and use-cases for Web Workers.",
            answer: "Web Workers run JavaScript in the background, in a separate thread, preventing UI blocking. They're essential for tasks like image processing or fetching data without affecting the main thread's performance."
        },
        {
            question: "What are Service Workers and how do they benefit Progressive Web Apps (PWAs)?",
            answer: "Service Workers act as a proxy server between web apps and the browser, allowing for functionality like offline access, background syncs, and push notifications, making PWAs more reliable and performance-oriented."
        },
        {
            question: "How does JavaScript handle single-threaded operations, and how can you manage long-running tasks to prevent blocking the main thread?",
            answer: "JavaScript is single-threaded, using the event loop to handle asynchronous operations non-blockingly. For long-running tasks, Web Workers can offload tasks from the main thread, ensuring the UI remains responsive."
        },
        {
            question: "What is the Temporal Dead Zone in JavaScript?",
            answer: "It's the period between entering a scope where a variable is declared (using `let` or `const`) and the actual variable declaration, during which the variable cannot be accessed."
        },
        {
            question: "Explain the differences and similarities between `async/await` and JavaScript Generators.",
            answer: "Both allow asynchronous code to be written in a synchronous manner. Generators yield multiple times and emit a sequence of values. `async/await`, built on Promises, makes asynchronous code more readable and is specifically designed for async operations."
        },
        {
            question: "What is Event Bubbling and Capturing in JavaScript DOM?",
            answer: "Event bubbling is the process where events propagate upward through the DOM tree. Capturing, or trickling, is the opposite, events propagate downward. Using `addEventListener`, you can choose either phase for handling events."
        },
        {
            question: "How can JavaScript's `WeakMap` and `WeakSet` be advantageous over `Map` and `Set`?",
            answer: "`WeakMap` and `WeakSet` hold references to their keys/values weakly, allowing for garbage collection when there's no other reference to the object. Useful for metadata about objects without preventing garbage collection."
        },
        {
            question: "Describe the benefits and drawbacks of using JavaScript transpilers like Babel.",
            answer: "Benefits: Allows use of newer ES features in older browsers, plugins for optimizations, and integration with build tools. Drawbacks: Added build step, source code differs from output, and potential for transpiler-specific bugs."
        },
        {
            question: "How do shadow DOM and virtual DOM differ?",
            answer: "Shadow DOM provides encapsulation by hiding DOM subtrees under shadow roots, mainly for Web Components. Virtual DOM is an in-memory representation of the real DOM, used in frameworks like React to optimize rendering."
        },
        {
            question: "What is the significance of JavaScript's `requestAnimationFrame`?",
            answer: "`requestAnimationFrame` allows for efficient animations by calling a function before the next repaint, ensuring smooth frame rates and optimized browser rendering."
        },
        {
            question: "How does the `bind` method differ from `call` and `apply`?",
            answer: "All three methods change the context of `this`. `bind` returns a new function with a bound context but doesn't invoke it. `call` and `apply` both invoke the function but accept arguments differently; `call` takes a list of arguments, while `apply` takes an array of arguments."
        },
        {
            question: "What's the significance of using JavaScript's `ArrayBuffer` and `TypedArray`?",
            answer: "`ArrayBuffer` represents a generic fixed-length raw binary data buffer. `TypedArray` offers a way to access and manipulate the contents of an `ArrayBuffer`. They're essential for handling binary data in web applications, like in WebGL or Web Audio API."
        },
        {
            question: "What are JavaScript Decorators, and how can they be useful?",
            answer: "Decorators are a proposed feature in JavaScript, inspired by languages like Python. They allow for meta-programming by annotating or modifying classes and properties at design time. They can be used for logging, type checking, or auto-generating code."
        },
        {
            question: "What's the difference between deep cloning and shallow cloning in JavaScript?",
            answer: "Shallow cloning creates a new object copying only the top-level properties. Deep cloning creates a new object along with recursively copying all the nested objects. Deep cloning ensures no shared references between the clone and the original."
        },
        {
            question: "How does event throttling improve application performance?",
            answer: "Throttling limits the rate at which a function executes. For events that trigger frequently, like `scroll` or `resize`, throttling ensures the event handler doesn't run excessively, improving performance and reducing potential lag."
        },
        {
            question: "Can you explain the role of `Set` and `Map` in ES6?",
            answer: "`Set` is a collection of values where each value is unique. `Map` is a collection of key-value pairs. Unlike objects, keys in `Map` can be of any type. Both provide utility methods for common operations and have better performance in certain scenarios compared to arrays or objects."
        },
        {
            question: "What is functional programming, and how does JavaScript support it?",
            answer: "Functional programming is a paradigm treating computation as evaluating mathematical functions. It avoids changing state or mutable data. JavaScript supports it through first-class functions, higher-order functions, and methods like `map`, `filter`, and `reduce`."
        },
        {
            question: "How do JavaScript modules improve code organization and maintainability?",
            answer: "Modules allow for modular code, enabling separation of concerns, easier testing, and reusability. ES6 introduced native module syntax with `import` and `export`, promoting better structure and encapsulation in applications."
        },
        {
            question: "How do lazy loading and code splitting enhance web application performance?",
            answer: "Lazy loading and code splitting defer the loading of non-essential scripts until they're needed. This reduces the initial payload, resulting in faster page loads. Modern bundlers like Webpack facilitate this by splitting the build into chunks, which can be loaded on-demand."
        },
        {
            question: "What's the role of the `Reflect` object introduced in ES6, and how does it differ from the `Object` functions?",
            answer: "`Reflect` is an object that encapsulates a set of methods for programmatic operations on objects. Unlike some `Object` functions, Reflect methods are functions that return more predictable results, often used with Proxies to perform meta-programming."
        }

    ]
}