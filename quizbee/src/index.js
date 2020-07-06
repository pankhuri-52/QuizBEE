import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class QuizBee extends Component {
    render() {
        return(
            <div className="container">
                <div className="title">
                   {/* <h1>QuizBee</h1> */}
                   QuizBee
                </div>
            </div>
        );
    }
}
ReactDOM.render(<QuizBee/>,document.getElementById("root"));