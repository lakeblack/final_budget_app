import React, {Component} from 'react'
import base from '../config/base'
import $ from 'jquery'

class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 5000,
            text: '',
            showSlider: false
        }
    }
    handleChange(event) {
        this.setState({
            income: parseInt(event.target.value, 10)
        });
    }
    onClick(e) {
        this.setState({
            sliderShow: !this.state.showSlider
        });
        $('#toggle').toggle(this.state.showSlider.show)
    }

    componentDidMount() {
        this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
            context: this,
            state: 'income'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.rebaseRef);
    }

    render() {
        const styles = {
            wrapper: {
                background: "#343243",
                width: "300px",
                borderRadius: "5px",
                margin: "auto auto"

            },
            container: {
                position: "relative",
                background: "#447c69 ",
                color: "#EDEAE3",
                width: "300px",
                borderRadius: "5px",
                margin: "150px auto 0 auto"
            },
            title: {
                fontFamily: "Yatra One",
                margin: "10px",
                fontSize: "32px"
            },
            slider: {
                width: "80%"
            },
            price: {
              float: "right",
              color: ""
            }

        }
        return (
            <div style={styles.wrapper} onClick={this.onClick.bind(this)}>
                <div style={styles.container}>
                    <p style={styles.title}>Income
                        <span style={styles.price}>
                            ${this.state.income}
                        </span>
                    </p>
                </div>
                {this.state.sliderShow
                    ? <input id="toggle" type='range' min={0} max={9999} step={5} value={this.state.income} onChange={this.handleChange.bind(this)}/>
                    : null}

            </div>
        )
    }
}

export default Income;
