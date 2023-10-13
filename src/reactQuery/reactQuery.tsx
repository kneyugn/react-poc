import { useContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { NameContext } from "../contexts";

export type ToDoItem = { value: string; label: string };

async function fetchTodos() {
  return new Promise<ToDoItem[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { value: "sr", label: "study react" },
        { value: "spython", label: "study python" },
      ]);
      //   reject(new Error("some Error"));
    }, 1000);
  });
}

function QuickToDo() {
  // TODO[x]: useContext
  const name = useContext(NameContext);
  // error
  // todo returned could be undefined due to throwing of error
  // third argument takes initial data {initialData: data}
  // TODO[x]: react query
  const { isLoading, error, data } = useQuery<ToDoItem[] | undefined, Error>(
    "repoData",
    async () => {
      try {
        return await fetchTodos();
      } catch (err) {
        // make sure err is instance of error
        if (err instanceof Error) {
          throw new Error("err");
        }
      }
    }
  );

  let myData = data as any[];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !myData) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>{name}</h1>
      <ul>
        {myData.map((item: any, idx: number) => (
          <li key={idx}>{item.label}</li>
        ))}
      </ul>
    </>
  );
}

const queryClient = new QueryClient();

export default function ReactQ() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuickToDo></QuickToDo>
    </QueryClientProvider>
  );
}
