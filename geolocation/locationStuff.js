//for now using button on options.html
document.getElementById("getLocation").addEventListener('click', getLocation)

function getLocation()
{
    navigator.geolocation.getCurrentPosition(position => {
        const {longitude, latitude} = position.coords
        const {timestamp} = position

        const dbObj = {
            latitude: latitude,
            longitude: longitude,
            GmtTimestamp: timestamp
        }

        console.log(dbObj)

        //TODO send to database
    }, positionError => {
        switch (positionError.code)
        {
            case GeolocationPositionError.POSITION_UNAVAILABLE:
                console.log('no pos available')
                break;
            case GeolocationPositionError.PERMISSION_DENIED:
                console.log('no permission')
                break;
            case GeolocationPositionError.TIMEOUT:
                console.log('timed out')
                break;
        }
    })
}
