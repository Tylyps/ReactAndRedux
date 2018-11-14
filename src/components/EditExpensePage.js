import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Editing the expense with id of {props.match.params.id}</h2>
    </div>
  )
};

export default EditExpensePage;
