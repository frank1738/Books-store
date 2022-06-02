import React from "react";

function Form() {
  return (
    <div className="form-section">
      <h3 className="form-header">ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <input type="input" value="Add Book" />
      </form>
    </div>
  );
}

export default Form;
