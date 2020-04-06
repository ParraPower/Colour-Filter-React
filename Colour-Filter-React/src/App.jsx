import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GridListItem from './subcomponents/colourgriditem.jsx';
import dataList from '../data/data.json';
//import styles from './styles/modules/app.module.scss';
//import 'bootstrap-scss';
import './styles/global.scss';

class App extends React.Component {
    val = "";
    listOfColours = dataList;

    constructor(props) {
        super();

        this.state = {
            val: "",
        };
        
        this.handleInput = this.handleInput.bind(this);
        this.generateColourListJSX = this.generateColourListJSX.bind(this);
        this.isHexInput = this.isHexInput.bind(this);
    }

    componentDidMount() {
    }


    handleInput(changeEvent) {
        this.state.val = changeEvent.target.value;
        this.setState(this.state);
    }

    isHexInput() {
        return this.state.val.startsWith("#");
    }

    generateColourListJSX() {
        var jsx = [];
        var max = 9;

        const val = this.state.val; //this.val
        var matchList = [];

        var isHex = this.isHexInput();

        for (var i = 0; i < this.listOfColours.length; ++i) {
            var v = this.listOfColours[i];

            var include = true;
           
            if (val.trim().length > 0) {
                include = false;

                if (!isHex && v["name"].toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    include = true;
                }
                else if (isHex && v["hex"].toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    include = true;
                }
                else {
                    include = false;
                }
            }

            if (include === true) {
                matchList.push(v);
            }
        }

        matchList.forEach(function (v, i) {
            if (i < 9) {
                jsx.push(<GridListItem model={v} />);
            }
        });

        return jsx;
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="colour-filter">
                    <div className="colour-filter-input-container">
                        <input type="text" onChange={this.handleInput} onBlur={this.handleInput} placeholder="filter colour by name, hex, e.g. #ff" />
                    </div>
                    <div className={"colour-filter-colour-grid" + " " + styles.red}>
                        {this.generateColourListJSX()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const containerElement = document.getElementById('colour-filter-app');
if (containerElement) {
    ReactDOM.render(<App />, containerElement);
}