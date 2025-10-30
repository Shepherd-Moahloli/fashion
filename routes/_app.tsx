import { h } from "preact";
import Router from "preact-router";
import Home from "./Home";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <NotFound default />
    </Router>
  );
}
