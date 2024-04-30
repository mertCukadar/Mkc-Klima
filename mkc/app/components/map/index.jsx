// client component
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Map() {
    return (
      <GoogleMapsEmbed
        apiKey = {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        height={700}
        width="100%"
        mode="place"
        q="MKC+Klima+Elektrik+Otomasyon/@36.8366111,28.7699634,15z"
      />
      
    )
  }