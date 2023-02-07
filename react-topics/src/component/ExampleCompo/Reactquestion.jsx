import React, { Component } from 'react';

class Reactquestion extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>What is React?</h4>
                            <p>
                                React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for<br></br>
                                applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

                            </p>
                            The important features of React are: <br />

                            <li> It supports server-side rendering.</li>
                            <li>   It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.</li>
                            <li>  It follows unidirectional data binding or data flow.</li>
                            <li>  It uses reusable or composable UI components for developing the view.</li>

                            <p>React is framework. the main focus on uri  so this used to single page application.means complete website single page.</p>
                            <mark>Why we used to react other not?/</mark>
                            <p>Beacuse react is a fast why fast bcoz react use virtual DOM</p>
                            <table width="350" align='center' border={1}>
                                <thead>
                                    <tr>
                                        <th>Virtual DOM</th>
                                        <th>Real DOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Virtual DOM is update only required data</td>
                                        <td>Real DOM is update Complete data</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>What is Component?</h4>
                            <p>A piece of code than can reusee like function</p>
                            <p>They can be reusable as per your need. For better understanding, consider the entire UI as a tree. Here, the root is the starting component, and each of the other pieces becomes branches, which are further divided into sub-branches.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Reactquestion;