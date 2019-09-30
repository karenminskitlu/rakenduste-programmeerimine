import React from "react";
import {fairyLights, dreamcatchers} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            items: fairyLights,
        }
    }

    handleChange(event){
        console.log(event.target.value);
        switch(event.target.value){
            case "fairyLights": {
                this.setState({
                    items: fairyLights,
                });
                break;
            }
            case "dreamcatchers": {
                this.setState({
                    items: dreamcatchers,
                });
                break;
            }
        }
    }

    render(){
        return (
            <>
                <Header />
                <select onChange={this.handleChange.bind(this)}>
                    <option value="fairyLights">fairyLights</option>
                    <option value="dreamcatchers">Dreamcatchers</option>
                </select>
                <ItemList items={this.state.items}/>
            </>
        )
    }
}
export default HomePage; 