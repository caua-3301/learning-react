import { Component } from "react"
import './style.css'

export class MyButton extends Component {
    render() {
        const {loadMore, disabled} = this.props;

        return (
            <button disabled={disabled} onClick={loadMore} >Load more</button>
        );
    }
}