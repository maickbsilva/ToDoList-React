import react, { Component } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-web";

class Form extends Component {

    static defaultProps = {
        onAdd: () => {

        }
    }

    state = {

        text: ''
    }

    add = () => {
        const { state } = this;
        if (state.text) {
            this.props.onAdd(state.text)
            this.handleChange('')
        }
    }
    
    handleChange = (text) => {
        this.setState({ text })
    }

    render() {

        return (

            <View>

                <TextInput value={this.state.text} onChangeText={this.handleChange} style={{backgroundColor:"#A1A1A1", margin: 5}}/>
                <Button title="Add" color="#A4A4A4" onPress={this.add} />


            </View>

        )
    }
}
export default Form;