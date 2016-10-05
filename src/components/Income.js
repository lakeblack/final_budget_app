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
                background: "rgba(52, 50, 67, 0.7)",
                borderRadius: "5px",
                paddingBottom: "20px",
                border: " 1px solid rgba(237, 234, 227, 0.6)",
                minWidth: "350px",

            },
            container: {
                position: "relative",
                color: "rgba(68, 124, 105, 1) ",
                width: "280px",
                borderBottom: " 1px solid rgba(237, 234, 227, 0.6)",
                margin: "15px auto 15px auto"
            },
            title: {
                fontFamily: "Oswald",
                margin: "10px",
                fontSize: "32px"
            },
            slider: {
                width: "80%",
                margin: "auto auto"
            },
            price: {
              float: "right",
            }

        }
        return (
            <div style={styles.wrapper} className="row income col-sm-4 col-sm-offset-3">
                <div style={styles.container}>
                    <p style={styles.title}>Income
                        <span style={styles.price}>
                            ${this.state.income}
                        </span>
                    </p>
                </div>
                  <input style={styles.slider} id="toggle" type='range' min={0} max={9999} step={5} value={this.state.income} onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

export default Income;


// onClick={this.onClick.bind(this)}
// {this.state.sliderShow
//   ? <input id="toggle" type='range' min={0} max={9999} step={5} value={this.state.income} onChange={this.handleChange.bind(this)}/>
// : null}
