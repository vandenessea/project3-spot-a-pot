import {Maps, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends component {
  render() {
    return (
      <Maps google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Maps>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCYXrxhue2vZfkXo6rIlk_uapWKN3wbQ9o")
})(MapContainer)






