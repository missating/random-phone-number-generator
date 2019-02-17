// react libraries
import React, { Component, Fragment } from 'react';

// third party libraries
import { connect } from 'react-redux';
import toastr from 'toastr';

// actions 
import { generatePhoneNumbers } from '../../actions/phoneNumbersAction';

// components
import Button from '../../components/Button';
import DisplayPhoneNumbers from "../../components/DisplayPhoneNumbers";

// styles
import './Home.css';

export class Home extends Component {
  state = {
    generatingValue: '',
    currentPage: 1,
    hasGeneratedNumbers: false,
  }

  onChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ generatingValue: inputValue, hasGeneratedNumbers: true });
  }

  onAddGeneratingValue = () => {
    let arr = []
    const { generatingValue } = this.state;
    const numberLength = 9;
    while (arr.length < generatingValue) {
      const createdPhoneNumber = `0${Math.floor(Math.pow(10, numberLength - 1) + Math.random() * 9 * Math.pow(10, numberLength - 1))}`;
      arr.push({ randomPhoneNumber: createdPhoneNumber })
    }
    toastr.options = {
      closeButton: true,
      extendedTimeOut: '1000',
      positionClass: 'toast-bottom-right',
      hideMethod: 'fadeOut'
    };
    toastr.success('Phone Numbers Successfully Generated');
    this.props.generatePhoneNumbers(arr);
  }

  render() {
    console.log('=========', this.props.phoneNumbers)
    return (
      <div className="home__container">
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <a href="#" className="navbar-brand">Phone Number Generator</a>
          <div className="form-inline">
            <input
              value={this.state.generatingValue}
              onChange={this.onChange}
              className="form-control mr-sm-2"
              type="number"
              placeholder="Input a number"
            />
            <Button
              name="Generate"
              className="Home__btn"
              onClick={this.onAddGeneratingValue}
              disabled={this.state.generatingValue.trim() === ''}
            />
          </div>
        </nav>
        <div>
          <DisplayPhoneNumbers
            phoneNumbers={this.props.phoneNumbers}
            hasGeneratedNumbers={this.state.hasGeneratedNumbers}
          />
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phoneNumbers: state.phoneNumbers.data
})

export default connect(mapStateToProps, { generatePhoneNumbers })(Home);
