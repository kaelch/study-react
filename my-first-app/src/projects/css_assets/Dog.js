import {Component} from "react";
import './Dog.css';
import docker from './docker_whale.png';

class Dog extends Component{
    render() {
        return (
            <div className="Dog">
                <h1>DOG!</h1>
                <img src={docker} alt="" className="Dog-img"/>
            </div>
        );

    }
}

export default Dog;