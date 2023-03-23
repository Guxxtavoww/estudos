function handleGetUserLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longitude, latitude } = position.coords;
      const baseReqUrl = new URL('https://nominatim.openstreetmap.org/reverse');
      baseReqUrl.searchParams.set('format', 'json');
      baseReqUrl.searchParams.set('lat', latitude);
      baseReqUrl.searchParams.set('lon', longitude);

      fetch(baseReqUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log({ response: data });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    (error) => {
      throw new Error(error);
    }
  );
}

handleGetUserLocation();
