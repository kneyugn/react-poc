import "./App.css";
import Counter from "./counter/counter";
import User from "./user/user";
import ToDo from "./todo/todo";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactQ from "./reactQuery/reactQuery";
import { useState } from "react";
import { NameContext } from "./contexts";

// TODO[x]: router with outlet
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHelper />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
      {
        path: "react-query",
        element: <ReactQ />,
      },
    ],
  },
]);


function AppHelper() {
  return (
    <>
      <h1>Hello world</h1>
      <Outlet />
    </>
  );
}


function App() {
  const [name, setName] = useState("jane doe");
  return (
    <>
      <NameContext.Provider value={name}>
        <RouterProvider router={router} />
      </NameContext.Provider>
    </>
  );
}

export default App;


// TODO: suspense
// TODO: testing (see if component is there, triggered by an event)
// TODO[x]: routing
// TODO: use some hooks
// TODO[x]: state management. when parent and child share the same props, a change in that prop will cause a re-render of parent but will not if they have 0 dependencies. use state store management like redux to retrigger
// TODO[x]: useCallback
// TODO[x]: string literal attributes

/**
 * No, it will not re-render. If you pass any props to the component from the parent component and you update that prop in children or that prop update in the parent component so both will re-render. But if the data or state has no dependency on the parent component so it will not cause a re-render in the parent component.
 */

