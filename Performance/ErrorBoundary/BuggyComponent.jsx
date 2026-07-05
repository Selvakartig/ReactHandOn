export default function BuggyComponent() {
  throw new Error("Buggy Component Crashed!");

  return <h2>Hello</h2>;
}
