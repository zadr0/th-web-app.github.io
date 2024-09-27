import { Component, ReactNode } from "react";
import {  } from "react-router-dom";

namespace buttons {
    export class Click extends Component {

        // eslint-disable-next-line @typescript-eslint/no-useless-constructor
        constructor(props: {}) {
            super(props);
        }

        changePath = (event: any): void => {
            window.location.href='/svo'
        }

        render(): ReactNode {
            return (<div>
                <h1 className="font-bold">Navigate to svo</h1>
                <button onClick={ this.changePath }>go</button>
            </div>)
        };
    };
};

export default buttons;