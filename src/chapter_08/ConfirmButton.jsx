// // Class 방식
// import React from "react";

// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };
//   }

//   //this.handleConfirm = this.handleConfirm.bind(this);
//   // handleConfirm() {
//   //   this.setState(prevState => ({
//   //     isConfirmed: !prevState.isConfirmed,
//   //   }));
//   // }

//   // Class Field Syntax 방식
//   handleConfirm = () => {
//     this.setState(prevState => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   };

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

// 함수방식
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(prevIsConfirmed => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
