import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="menu">Click to view our menu page</Link>
      <Link to="selfserve">Click to view our selfserve page</Link>
    </div>
  );
}

export default Home;
