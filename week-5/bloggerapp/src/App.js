import "./App.css";

import Books, { books } from "./Books";
import Blogs, { blogs } from "./Blogs";
import Courses, { courses } from "./Courses";

function App() {

  return (

    <div className="container">

      <div className="column">
        <h1>Course Details</h1>
        <Courses courses={courses} />
      </div>

      <div className="column">
        <h1>Book Details</h1>
        <Books books={books} />
      </div>

      <div className="column">
        <h1>Blog Details</h1>
        <Blogs blogs={blogs} />
      </div>

    </div>

  );
}

export default App;