// client component
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Map(props) {
    return (
      <div className="w-full rounded-2xl">
        <GoogleMapsEmbed
          apiKey = {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          height={300}
          width="100%"
          mode="place"
          q={props.dest}
        />
      </div>
      
    )
  }