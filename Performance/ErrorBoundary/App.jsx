import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

export default function App() {
  return (
    <div>
      <h1>React Error Boundary Demo</h1>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
