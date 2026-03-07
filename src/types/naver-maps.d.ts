declare namespace naver {
  namespace maps {
    class Map {
      constructor(element: HTMLElement | string, options?: MapOptions)
      setCenter(latlng: LatLng): void
      setZoom(zoom: number): void
      getCenter(): LatLng
      getZoom(): number
    }

    class LatLng {
      constructor(lat: number, lng: number)
      lat(): number
      lng(): number
    }

    class Marker {
      constructor(options?: MarkerOptions)
      setMap(map: Map | null): void
      setPosition(latlng: LatLng): void
      getPosition(): LatLng
    }

    class CustomOverlay {
      constructor(options?: CustomOverlayOptions)
      setMap(map: Map | null): void
      setPosition(latlng: LatLng): void
    }

    interface MapOptions {
      center?: LatLng
      zoom?: number
      minZoom?: number
      maxZoom?: number
    }

    interface MarkerOptions {
      position?: LatLng
      map?: Map
      title?: string
      icon?: string | ImageIcon
    }

    interface ImageIcon {
      url: string
      size?: Size
      anchor?: Point
    }

    interface CustomOverlayOptions {
      position?: LatLng
      content?: string | HTMLElement
      map?: Map
    }

    class Size {
      constructor(width: number, height: number)
    }

    class Point {
      constructor(x: number, y: number)
    }

    namespace Event {
      function addListener(target: object, type: string, listener: Function): void
      function removeListener(target: object, type: string, listener: Function): void
    }
  }
}
