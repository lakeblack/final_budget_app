import React, {Component} from 'react'
import base from '../config/base'
import $ from 'jquery'

class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 5000,
            text: '',
            showSlider: false,
        }
    }
    handleChange(event) {
        this.setState({
            income: parseInt(event.target.value, 10)
        });
    }
    onClick(e) {
      console.log("im trying");
        this.setState({
            sliderShow: !this.state.showSlider,
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
      wrapper:{
        maxWidth: "30%",
      },
        container: {
            position: "relative",
            background: "#398E5F",
            color: "#2D6D48",
            width: "300px",
            height: "100px",
            borderRadius: "5px",
            marginTop: "150px",
        },
        title: {
            fontFamily: "Oswald",
            fontSize: "24px",
            margin: "10px"
        },
        price: {
            fontFamily: "Abril Fatface",
            position: "absolute",
            top: "25px",
            fontSize: "48px"
        },
        icon: {
            color: "#2D6D48",
            position: "absolute",
            top: "0",
            right: "0",
            fontWeight: "900",
            fontSize: "78px"
        },
    }
    return (
        <div className="income">
            <div style={styles.container} onClick={this.onClick.bind(this)}>
                <p style={styles.title}>Income</p>
                <label style={styles.price}>${this.state.income}</label>
                <i className="glyphicon glyphicon-usd" style={styles.icon}></i>
            </div>
            {this.state.sliderShow
                ? <input id="toggle" type='range' min={0} max={9999} step={5} value={this.state.income} onChange={this.handleChange.bind(this)}/>
                : null}

        </div>
    )
}
}

export default Income;
