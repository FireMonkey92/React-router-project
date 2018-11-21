import React, { Component } from 'react'


class LifeCycle extends Component {
    // 1.  Get defaults step
    constructor(props) {
        super(props);
        //debugger
        console.log("Default step");
        // 2.  Set Initial State
        this.state = {
            title: 'MARVELS HEROs',
            body: 'All Hero Dies One day'
        }
    }

    // 3.  Befor components get created
    componentWillMount() {
        //debugger
        console.log("Befor Component is created");
        //below link will throws error as component is not randered so it cant find h4
        //document.querySelector('h4').style.color='red';
    }
    // Method we can handle befor the state gets updated Befor and After.
    componentWillUpdate() {
        console.log("Befor State is Updated");
    }
    componentDidUpdate() {
        console.log("Afters State is Updated");
    }

    // Method to check weather the state should be chaged or not.
    // returns boolean val. if true>change state. if no>no change in state.
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.title === 'EA-Gamesx') {
            return false;
        }
        else{
            console.log("Can change the state   ")
            return true;
        }
    }




    //This method will get extecuted when the component recives new props,
    //this willl not get executed for the first time load of the components 
    componentWillReceiveProps(){
        console.log("components receive props");
    }
    
    //called when we swich between component and go to another component.
    //last lifecycle method of react lC. befor destroying the components 
    componentWillUnmount(){
      console.log("Component is Unmounted");
    }


    // 4.  Render JSX
    render() {
        //debugger
        return (
            <div>
                <h4>{this.state.title}</h4>
                <div>{this.state.body}</div>
                <div style={{
                    margin: '20px',
                    border: '2px',
                    borderColor: 'black'
                }}
                    onClick={() => {
                        this.setState({
                            title: 'EA-Games',
                            body: 'NFSMW'
                        })
                    }}>Click To Change the state</div>
            </div>
        )
    }

    // 5.  Call After components Get Mounted
    componentDidMount() {
        //debugger
        console.log("After Component is loaded");
        document.querySelector('h4').style.color = 'red';
    }

}
export default LifeCycle;



