// // src/components/AddressSelection.js
// import React, { useEffect } from 'react';
// import './AddressSelection.css'; // Import the CSS file

// const AddressSelection = () => {
//   useEffect(() => {
//     const initMap = async () => {
//       const { APILoader } = await import('https://unpkg.com/@googlemaps/extended-component-library@0.6');
//       const { Autocomplete } = await APILoader.importLibrary('places'); // Import Autocomplete here

//       const CONFIGURATION = {
//         "ctaTitle": "Checkout",
//         "mapOptions": {
//           "center": { "lat": 37.4221, "lng": -122.0841 },
//           "fullscreenControl": true,
//           "mapTypeControl": false,
//           "streetViewControl": true,
//           "zoom": 16,
//           "zoomControl": true,
//           "maxZoom": 22,
//           "mapId": ""
//         },
//         "mapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
//         "capabilities": {
//           "addressAutocompleteControl": true,
//           "mapDisplayControl": true,
//           "ctaControl": true
//         }
//       };

//       const getFormInputElement = (componentType) => {
//         return document.getElementById(`${componentType}-input`);
//       };

//       const fillInAddress = (place) => {
//         const getComponentName = (componentType) => {
//           for (const component of place.address_components || []) {
//             if (component.types[0] === componentType) {
//               return component.short_name;
//             }
//           }
//           return '';
//         };

//         const ADDRESS_COMPONENT_TYPES_IN_FORM = [
//           'location',
//           'locality',
//           'administrative_area_level_1',
//           'postal_code',
//           'country',
//         ];

//         for (const componentType of ADDRESS_COMPONENT_TYPES_IN_FORM) {
//           getFormInputElement(componentType).value = getComponentName(componentType);
//         }
//       };

//       const renderAddress = (place) => {
//         const mapEl = document.querySelector('gmp-map');
//         const markerEl = document.querySelector('gmp-advanced-marker');

//         if (place.geometry && place.geometry.location) {
//           mapEl.center = place.geometry.location;
//           markerEl.position = place.geometry.location;
//         } else {
//           markerEl.position = null;
//         }
//       };

//       await customElements.whenDefined('gmp-map');
//       document.querySelector('gmp-map').innerMap.setOptions(CONFIGURATION.mapOptions);
//       const autocomplete = new Autocomplete(getFormInputElement('location'), {
//         fields: ['address_components', 'geometry', 'name'],
//         types: ['address'],
//       });

//       autocomplete.addListener('place_changed', () => {
//         const place = autocomplete.getPlace();
//         if (!place.geometry) {
//           window.alert(`No details available for input: '${place.name}'`);
//           return;
//         }
//         renderAddress(place);
//         fillInAddress(place);
//       });
//     };

//     initMap();
//   }, []);

//   return (
//     <div>
//       <gmpx-api-loader key="YOUR_GOOGLE_MAPS_API_KEY" solution-channel="GMP_QB_addressselection_v3_cABC"></gmpx-api-loader>
//       <gmpx-split-layout row-layout-min-width="600">
//         <div className="panel" slot="fixed">
//           <div>
//             <img className="sb-title-icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt="" />
//             <span className="sb-title">Address Selection</span>
//           </div>
//           <input type="text" placeholder="Address" id="location-input" />
//           <input type="text" placeholder="Apt, Suite, etc (optional)" />
//           <input type="text" placeholder="City" id="locality-input" />
//           <div className="half-input-container">
//             <input type="text" className="half-input" placeholder="State/Province" id="administrative_area_level_1-input" />
//             <input type=" text" className="half-input" placeholder="Zip/Postal code" id="postal_code-input" />
//           </div>
//           <input type="text" placeholder="Country" id="country-input" />
//           <gmpx-icon-button variant="filled">Checkout</gmpx-icon-button>
//         </div>
//         <gmp-map slot="main">
//           <gmp-advanced-marker></gmp-advanced-marker>
//         </gmp-map>
//       </gmpx-split-layout>
//     </div>
//   );
// };

// export default AddressSelection;

