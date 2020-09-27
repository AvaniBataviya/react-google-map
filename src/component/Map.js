import React from "react";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const MyMapComponent = compose(
	withProps({
		loadingElement: <div style={{height: `100%`}}/>,
		containerElement: <div style={{height: `500px`}}/>,
		mapElement: <div style={{height: `100%`}}/>,
	}),
	withScriptjs,
	withGoogleMap,
)(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{lat: props.lat, lng: props.lng}}
	>
		<Marker position={{lat: props.lat, lng: props.lng}}/>
	</GoogleMap>
));

export default () => {
	const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
	const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}`;
	return (
		<MyMapComponent
			googleMapURL={googleMapURL}
			lat={23.0225}
			lng={72.5714}
		/>
	);
};
