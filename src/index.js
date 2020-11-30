import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const MyInfo = () => {
    return (
        <div>
            <h2>ONYEDIKA OTUYA</h2>
            <ul>
                <li>Rwand</li>
                <li>Dubai</li>
                <li>mali</li>
            </ul>
        </div>
    )
}

ReactDom.render(<MyInfo />, document.getElementById("root"));
// ReactDOM.render(<h1>just trying this out</h1>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
