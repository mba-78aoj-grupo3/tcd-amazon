import Env from '@ioc:Adonis/Core/Env'
import { Client, LatLng } from '@googlemaps/google-maps-services-js'

const calculateDistance = () => {
  const service = new Client()

  // const origin1 = new latlog(55.930385, -3.118425)
  const origin2: LatLng = 'Greenwich, England'
  const destinationA: LatLng = 'Stockholm, Sweden'
  // const destinationB = new google.maps.LatLng(50.087692, 14.421150)
  const t = service.distancematrix({
    params: {
      origins: [origin2],
      destinations: [destinationA],
      key: Env.get('GOOGLE_MAPS_API_KEY'),
    },
  })
}

const transformAddressToLatLog = async (address: string) => {
  const service = new Client()

  const geocoding = await service.geocode({
    params: {
      address: address,
      key: Env.get('GOOGLE_MAPS_API_KEY'),
    },
  })
  // .then((result) => console.log(result.data.results[0].geometry.location))
  // .catch((error) => console.log(error))

  return geocoding.data.results[0].geometry.location
}

const calculateLatitudinalDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRadian = (angle) => (Math.PI / 180) * angle
  const distance = (a, b) => (Math.PI / 180) * (a - b)
  const RADIUS_OF_EARTH_IN_KM = 6371

  const dLat = distance(lat2, lat1)
  const dLon = distance(lon2, lon1)

  lat1 = toRadian(lat1)
  lat2 = toRadian(lat2)

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.asin(Math.sqrt(a))

  const finalDistance = RADIUS_OF_EARTH_IN_KM * c

  return finalDistance
}

export { calculateDistance, calculateLatitudinalDistance, transformAddressToLatLog }
