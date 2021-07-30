import React from 'react';

export default class FetchRestrooms extends React.Componet {
    state = {
        loading: true,
        restroom: null
    }
    
    async componentDidMount() {
        const url = "https://www.refugerestrooms.org/api/v1/restrooms";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({restroom: data.results[0]})
        console.log(data.results[0]);

    }

    render() {
    return (
    <div>
    {this.state.loading || !this.state.restroom ? (
    <div>loading...</div>
    ) : ( 
        <div>restroom...</div>
    
    )}
</div>
    );

    }

}