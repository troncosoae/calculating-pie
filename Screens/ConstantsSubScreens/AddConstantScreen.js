import React from 'react'
import { connect } from 'react-redux';

import GenericForm from '../../Components/GenericForm';
import { addConstant } from '../../Redux/constantActions';

class AddConstantScreen extends React.Component {

  handleSubmit = ({sym, name, value, units}) => () => {
    this.props.addConstant(sym.value, name.value, value.value + units.value)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <GenericForm 
        initState={{
          name: {name: "Name", placeholder: "Name...", keyboardType: null, value: "", required: true},
          sym: {name: "Symbol", placeholder: "Symbol...", keyboardType: null, value: "", required: true}, 
          value: {name: "Value", placeholder: "Value...", keyboardType: "numeric", value: "", required: true},
          units: {name: "Units", placeholder: "Units...", keyboardType: null, value: "", required: false},
        }}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

// redux
const mapStateToProps = state => ({
    constants: state.constants,
})

const mapDispatchToProps = {
    addConstant: addConstant,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddConstantScreen)