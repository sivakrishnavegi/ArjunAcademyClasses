import React from 'react';

class News extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
            
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading.....</div>;

        return (
            <div className="App">
              {/* <ul>
                    {items.map(item => (
                        <div>
                          <center>
                          <li key={item.id}>
                            Name: {item.name} | Email: {item.email} | Author : {item.author} 
                        </li>
                        </center>  

                        
                        </div>
                       
                    ))}
                </ul> */} 
                
            </div>

            
        );

    }

}

export default News;