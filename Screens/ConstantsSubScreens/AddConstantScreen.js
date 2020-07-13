import React from 'react'

import GenericForm from '../../Components/GenericForm';

class AddConstantScreen extends React.Component {

  render() {
    return (
      <GenericForm 
        initState={{
          sym: {name: "Symbol", placeholder: "Symbol...", keyboardType: null, value: ""}, 
          name: {name: "Name", placeholder: "Name...", keyboardType: null, value: ""},
          value: {name: "Value", placeholder: "Value...", keyboardType: "numeric", value: ""},
          units: {name: "Units", placeholder: "Units...", keyboardType: null, value: ""},
        }}
      />
    )
  }
}

// - name
// - key
// - placeholder
// - keyboard type
// - valid input

export default AddConstantScreen

// // redux
// const mapStateToProps = state => ({
//     constants: state.constants,
// })

// const mapDispatchToProps = {
//     addConstant: addConstant,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddConstantScreen)