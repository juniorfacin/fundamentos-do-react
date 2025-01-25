function sum(a, b) {
  return a + b
}

function currentStatus(value) {
  return value ? "ON" : "OFF";
}

export default function App() {
  const tech = "JavaScript";

  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>It's easy, like 1 + 1 is {sum(1, 1)}</h2>
      <h2>Current Status: {currentStatus(true)}</h2>
    </div>
  );
}