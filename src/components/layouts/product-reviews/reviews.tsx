'use client'

import * as React from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { cn } from '~/lib/utils'

import { Review } from './types/types'
import { reviews } from './data/data'

interface YouTubePlayerOptions {
  videoId: string;
  playerVars: {
    autoplay: 0 | 1;
    controls: 0 | 1;
    modestbranding: 0 | 1;
    rel: 0 | 1;
  };
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, options: YouTubePlayerOptions) => void;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

function TestimonialItem({ testimonial }: { testimonial: Review }) {
  const [showVideo, setShowVideo] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = React.useRef<any>(null)

  const handlePlay = React.useCallback(() => {
    setShowVideo(true);
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  }, []);

  React.useEffect(() => {
    if (showVideo && !playerRef.current) {
      playerRef.current = new window.YT.Player(`youtube-player-${testimonial.sortOrder}`, {
        videoId: testimonial.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
      });
    }
  }, [showVideo, testimonial.sortOrder, testimonial.youtubeId]);

  return (
    <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
      <div className="relative aspect-[9/16] group flex-shrink-0 rounded-sm md:rounded-lg overflow-hidden">
        {showVideo ? (
          <div id={`youtube-player-${testimonial.sortOrder}`} className="w-full h-full" />
        ) : (
          <>
            <Image
              src={testimonial.image}
              alt={testimonial.alt}
              fill
              className="object-cover rounded-lg"
            />
            <div 
              className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Reviews() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const sortedReviews = React.useMemo(() => {
    return [...reviews].sort((a, b) => a.sortOrder - b.sortOrder)
  }, [])

  React.useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  return (
    <section id="reviews" className="relative py-16 md:py-24 overflow-hidden px-4">
      <div className="absolute bottom-0 w-full h-[50%] bg-gray-50"></div>

      <div className="container mx-auto relative">
        <div className="mb-12">
          <div className="flex flex-col gap-6 mb-16">
            <p className="text-orange-500 font-medium mb-8">[ 140+ CHANGED LIVES ]</p>
            <h2 className="text-4xl md:text-6xl font-thin ">
              Reviews
            </h2>
            <p className="text-xl">
              The Mental Health Breakthrough of the century.
            </p>
          </div>
        </div>
        
        <div className="relative left-0 sm:w-[100vw] rounded-sm md:rounded-lg overflow-hidden">
          <div className="relative w-full">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4 ">
                {sortedReviews.map((review, index) => (
                  <CarouselItem key={`${review.sortOrder}-${index}`} className="pl-4 md:basis-1/3 lg:basis-1/5">
                    <TestimonialItem testimonial={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xl font-medium w-[2ch]">
                {String(current).padStart(2, '0')}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "w-6 h-0.5 transition-all duration-300",
                      current === index + 1 ? "bg-orange-500" : "bg-gray-300"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <span className="font-mono text-xl font-medium text-gray-400 w-[2ch]">
                {String(count).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

