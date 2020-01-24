$('.regular').slick({
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4
});

$('.regular-small').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});

function initMap() {
	// The location of Uluru
	var uluru = { lat: 18.4751724, lng: 73.89174160000002 };
	// The map, centered at Uluru
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		styles: [
			{ featureType: 'administrative', elementType: 'all', stylers: [ { saturation: '-100' } ] },
			{ featureType: 'administrative.province', elementType: 'all', stylers: [ { visibility: 'off' } ] },
			{
				featureType: 'landscape',
				elementType: 'all',
				stylers: [ { saturation: -100 }, { lightness: 65 }, { visibility: 'on' } ]
			},
			{
				featureType: 'poi',
				elementType: 'all',
				stylers: [ { saturation: -100 }, { lightness: '50' }, { visibility: 'simplified' } ]
			},
			{ featureType: 'road', elementType: 'all', stylers: [ { saturation: '-100' } ] },
			{ featureType: 'road.highway', elementType: 'all', stylers: [ { visibility: 'simplified' } ] },
			{ featureType: 'road.arterial', elementType: 'all', stylers: [ { lightness: '30' } ] },
			{ featureType: 'road.local', elementType: 'all', stylers: [ { lightness: '40' } ] },
			{
				featureType: 'transit',
				elementType: 'all',
				stylers: [ { saturation: -100 }, { visibility: 'simplified' } ]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [ { hue: '#ffff00' }, { lightness: -25 }, { saturation: -97 } ]
			},
			{ featureType: 'water', elementType: 'labels', stylers: [ { lightness: -25 }, { saturation: -100 } ] }
		]
	});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: uluru, map: map, icon: 'img/marker.png' });
}
