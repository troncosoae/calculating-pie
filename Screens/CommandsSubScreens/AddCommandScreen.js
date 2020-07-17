import React from 'react'
import { connect } from 'react-redux';

import GenericForm from '../../Components/GenericForm';
import { addCommand } from '../../Redux/commandActions';

class AddCommmandScreen extends React.Component {

  handleSubmit = ({name, command}) => () => {
    this.props.addCommand(name.value, command.value)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <GenericForm 
        initState={{
          name: {name: "Name", placeholder: "Name...", keyboardType: null, value: "", required: true},
          command: {name: "Command", placeholder: "Command...", keyboardType: null, value: "", required: true},
        }}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

// redux
const mapStateToProps = state => ({
    // constants: state.constants,
})

const mapDispatchToProps = {
  addCommand: addCommand,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommmandScreen)