"use client"

import { useState } from "react"
import { ChevronRight, Map, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Transition } from "@/components/ui/transition"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export default function NeighborhoodExperience() {
  const [currentDay, setCurrentDay] = useState<string>("welcome")
  
  const goToDay = (day: string) => {
    setCurrentDay(day)
    // Smooth scroll to top with a slight delay for better UX
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  const restartExperience = () => {
    setCurrentDay("welcome")
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Calculate progress percentage
  const getProgress = () => {
    const currentIndex = dayOrder.indexOf(currentDay)
    if (currentIndex <= 0) return 0
    if (currentIndex >= dayOrder.length - 1) return 100
    
    return Math.round((currentIndex / (dayOrder.length - 2)) * 100)
  }
  
  // Define the order of days
  const dayOrder = [
    "welcome",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday-day",
    "friday-night",
    "sunday",
    "end-screen"
  ]

  // Get day-specific images
  const getDayImages = (day: string) => {
    switch(day) {
      case "monday":
        return [
          "/mandag/bybane1.png", 
          "/mandag/bybane2.png", 
          "/mandag/bybane3.png", 
          "/mandag/sykkel1.png",
          "/mandag/sykkel2.png",
          "/mandag/sykkel3.jpeg",
          "/mandag/sykkel4.jpeg"
        ];
      case "tuesday":
        return [
          "/tirsdag/slv.png", 
          "/tirsdag/solheimsvannet.png", 
          "/tirsdag/sammen.png", 
          "/tirsdag/sammen2.png",
          "/tirsdag/ado.png"
        ];
      case "wednesday":
        return [
          "/onsdag/rema1000.png", 
          "/onsdag/spar.png", 
          "/onsdag/kiwi.png", 
          "/onsdag/apotek.png"
        ];
      case "thursday":
        return [
          "/torsdag/leaparken.png", 
          "/torsdag/takterassen.png",
          "/torsdag/terrase2.png",
          "/torsdag/terrasse3.png"
        ];
      case "friday-day":
        return [
          "/fredag_dag/hvl.png", 
          "/fredag_dag/alba.png", 
          "/fredag_dag/godtbrod.png"
        ];
      case "friday-night":
        return [
          "/fredag_kveld/biensnackbar.png", 
          "/fredag_kveld/sakarias.png", 
          "/fredag_kveld/gyros.png"
        ];
      case "sunday":
        return [
          "/sondag/lovstien0.jpeg",
          "/sondag/lovstien.png",
          "/sondag/forum.png", 
          "/sondag/brannstadion.png"
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto px-4 py-4 sm:py-6 relative">
        {/* Progress indicator */}
        {currentDay !== "welcome" && currentDay !== "end-screen" && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">{getProgress()}% fullført</span>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <PicturesButton day={currentDay} images={getDayImages(currentDay)} />
                <MapButton />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Content container */}
        <div className="relative min-h-[60vh] flex items-center justify-center">
          {/* Welcome Screen */}
          <Transition 
            show={currentDay === "welcome"} 
            className="w-full"
          >
            <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
              <div className="w-full max-w-sm mx-auto">
                <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-primary">OPPLEV EN UKE I DITT NYE NABOLAG!</h1>
                <p className="mb-4 sm:mb-6 text-base sm:text-base text-muted-foreground">
                  Velkommen til et nabolag som har alt du trenger for en behagelig og praktisk hverdag!
                </p>
                
                <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200 mb-4 sm:mb-6">
                  <Image 
                    src="/map.png" 
                    alt="Kart over nabolaget" 
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority={true}
                    sizes="100vw"
                  />
                </div>
                
                <Button size="lg" className="w-full max-w-xs font-semibold text-base py-4 mx-auto" onClick={() => goToDay("monday")}>
                  Start opplevelsen
                </Button>
              </div>
            </div>
          </Transition>

          {/* Monday */}
          <Transition 
            show={currentDay === "monday"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                MANDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">
                Ny uke, nye muligheter – og heldigvis er reisen til jobb enkel og effektiv:
              </p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🚊"
                  title="Bybanen"
                  description="Kun få minutters gange til holdeplassen, med både Linje 1 og 2 lett tilgjengelig. Dette gjør Kronstad til et svært sentralt område i Bergen."
                  onClick={() => goToDay("tuesday")}
                />
                <DayOption
                  emoji="👟"
                  title="Til fots"
                  description="Start dagen med en frisk spasertur til sentrum."
                  onClick={() => goToDay("tuesday")}
                />
                <DayOption
                  emoji="🚲"
                  title="Bysykkel"
                  description="Flere stasjoner i nærheten gjør det lett å tråkke seg inn i arbeidsmodus."
                  onClick={() => goToDay("tuesday")}
                />
              </div>
            </div>
          </Transition>

          {/* Tuesday */}
          <Transition 
            show={currentDay === "tuesday"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                TIRSDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">
                Etter en lang dag på jobb er det tid for bevegelse og frisk luft:
              </p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🏃‍♀️"
                  title="Løp rundt Store Lungegårdsvannet"
                  description="En populær 3 km lang rundløype."
                  onClick={() => goToDay("wednesday")}
                />
                <DayOption
                  emoji="🚶‍♂️"
                  title="Gå en tur rundt Solheimsvannet"
                  description="Et urbant parkvann med en 1 km rundløype rett utenfor døren."
                  onClick={() => goToDay("wednesday")}
                />
                <DayOption
                  emoji="🏋️"
                  title="Sammen Kronstad"
                  description="Et  moderne treningssenter med varierte treningsmuligheter. Senterets nesten 4000 kvadratmeter er åpne for både studenter og andre."
                  onClick={() => goToDay("wednesday")}
                />
                <DayOption
                  emoji="🏊"
                  title="ADO Arena"
                  description="En kort bybanetur tar deg til Bergens beste svømmehall."
                  onClick={() => goToDay("wednesday")}
                />
              </div>
            </div>
          </Transition>

          {/* Wednesday */}
          <Transition 
            show={currentDay === "wednesday"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                ONSDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">
                Midtveis i uken – tid for å fylle kjøleskapet og ta unna dagligdagse ærender:
              </p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🛒"
                  title="Kiwi"
                  description="Ca. 250m fra boligen."
                  onClick={() => goToDay("thursday")}
                />
                <DayOption
                  emoji="🛒"
                  title="Rema 1000"
                  description="Ca. 250m fra boligen."
                  onClick={() => goToDay("thursday")}
                />
                <DayOption
                  emoji="📮"
                  title="Spar (med post i butikk)"
                  description="Ca. 450m fra boligen."
                  onClick={() => goToDay("thursday")}
                />
                <DayOption
                  emoji="💊"
                  title="Apotek 1"
                  description="Ca. 300m fra boligen."
                  onClick={() => goToDay("thursday")}
                />
              </div>
            </div>
          </Transition>

          {/* Thursday */}
          <Transition 
            show={currentDay === "thursday"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                TORSDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">Lad opp før helgen med litt selvpleie og velvære:</p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🧖‍♀️"
                  title="Sammen Kronstad badstue"
                  description="Perfekt etter en treningsøkt for å myke opp slitne muskler."
                  onClick={() => goToDay("friday-day")}
                />
                <DayOption
                  emoji="☀️"
                  title="Takterrassen"
                  description="Slapp av med utsikt over byens tak og fjell."
                  onClick={() => goToDay("friday-day")}
                />
                <DayOption
                  emoji="🧺"
                  title="Leaparken"
                  description="Nyt en rolig stund i en skjult perle i Bergen."
                  onClick={() => goToDay("friday-day")}
                />
              </div>
            </div>
          </Transition>

          {/* Friday Day */}
          <Transition 
            show={currentDay === "friday-day"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                FREDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">Få unna siste arbeidsøkten før helgen:</p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🏛️"
                  title="Høgskulen på Vestlandet"
                  description="Moderne campus med gode arbeidsplasser. Ca. 600m til hovedbygget."
                  onClick={() => goToDay("friday-night")}
                />
                <DayOption
                  emoji="☕"
                  title="Godt Brød Kronstad"
                  description="Produktivitet med nybrygget kaffe og bakervarer. Ca. 200m unna."
                  onClick={() => goToDay("friday-night")}
                />
                <DayOption
                  emoji="☕"
                  title="Albatrossen"
                  description="Koselig kafé med avslappet atmosfære og god kaffe. Ca. 700m unna."
                  onClick={() => goToDay("friday-night")}
                />
                <DayOption
                  emoji="🏠"
                  title="Hjemmekontor"
                  description="Nyt arbeidsroen i din egen leilighet."
                  onClick={() => goToDay("friday-night")}
                />
              </div>
            </div>
          </Transition>

          {/* Friday Night */}
          <Transition 
            show={currentDay === "friday-night"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                FREDAG KVELD
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">
                Endelig helg! Magen rumler etter en produktiv uke. Hva frister til middag?
              </p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="🍔"
                  title="Bien Snackbar"
                  description="En saftig burger og noe godt i glasset i en hyggelig atmosfære. Ca. 900m unna."
                  onClick={() => goToDay("sunday")}
                />
                <DayOption
                  emoji="🥙"
                  title="Greek Gyros House"
                  description="Gresk street food – raskt, smakfullt og mettende. Ca. 200m unna."
                  onClick={() => goToDay("sunday")}
                />
                <DayOption
                  emoji="🍕"
                  title="Sakarias"
                  description="Bydelens favoritt med steinovnsbakte pizzaer og gode råvarer. Ca. 800m unna."
                  onClick={() => goToDay("sunday")}
                />
                <DayOption
                  emoji="🏠"
                  title="Hjemmekos"
                  description="Lag noe godt hjemme, sleng beina på bordet og nyt en avslappende start på helgen."
                  onClick={() => goToDay("sunday")}
                />
              </div>
            </div>
          </Transition>

          {/* Sunday */}
          <Transition 
            show={currentDay === "sunday"} 
            className="w-full"
          >
            <div>
              <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-primary text-center">
                SØNDAG
              </h1>
              <p className="mb-4 sm:mb-6 text-center text-base sm:text-base text-muted-foreground">Rund av uken med gode opplevelser:</p>
              <div className="space-y-3 sm:space-y-4">
                <DayOption
                  emoji="⚽"
                  title="Brann Stadion"
                  description="Under 15 minutters gange til fotballfest og elektrisk stemning!"
                  onClick={() => goToDay("end-screen")}
                />
                <DayOption
                  emoji="🎭"
                  title="Forum Scene"
                  description="Konserter, teater og stand-up – kun ett bybanestopp eller en 15-minutters spasertur unna."
                  onClick={() => goToDay("end-screen")}
                />
                <DayOption
                  emoji="🌲"
                  title="Løvstien"
                  description="En avslappende søndagstur med panoramautsikt over Bergen."
                  onClick={() => goToDay("end-screen")}
                />
              </div>
            </div>
          </Transition>

          {/* End Screen */}
          <Transition 
            show={currentDay === "end-screen"} 
            className="w-full"
          >
            <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
              <div className="max-w-sm mx-auto">
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                </div>
                <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-primary">Takk for at du opplevde en uke i nabolaget!</h1>
                <p className="mb-8 sm:mb-10 text-base sm:text-base text-muted-foreground">
                  Nå har du fått et innblikk i hvordan livet kan være i dette fantastiske området. Med enkel tilgang til
                  transport, fritidsaktiviteter, butikker og service er dette et ideelt sted å bo. Tenk å kunne oppleve
                  dette hver uke!
                </p>
                <Button size="lg" className="w-full max-w-xs font-semibold text-base py-5 sm:py-6 mx-auto no-select" onClick={restartExperience}>
                  Start på nytt
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

interface DayOptionProps {
  emoji: string
  title: string
  description: string
  onClick: () => void
}

function DayOption({ emoji, title, description, onClick }: DayOptionProps) {
  return (
    <Card
      className="relative flex cursor-pointer flex-col justify-center border-l-4 border-l-primary p-3 sm:p-4 hover:bg-gray-50"
      onClick={onClick}
      role="button"
      aria-label={`Velg ${title}`}
    >
      <div className="mb-1 flex items-center gap-2 pr-6 font-semibold text-sm sm:text-base">
        <span className="text-lg sm:text-xl">{emoji}</span> {title}
      </div>
      {description && <p className="text-xs sm:text-sm text-muted-foreground pr-6">{description}</p>}
      <ChevronRight 
        className="absolute right-2 sm:right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary opacity-70" 
      />
    </Card>
  )
}

// Map Button Component
function MapButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 font-medium"
        >
          <Map className="h-4 w-4" />
          Se kart
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] p-0 border-0 rounded-lg overflow-hidden">
        <DialogTitle className="sr-only">Kart over nabolaget</DialogTitle>
        <div className="w-full h-[70vh] sm:h-[80vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7651591817374!2d5.341950776953125!3d60.38071798200724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf94c9b3d5cf9%3A0x4e9542bb1bc4b4a5!2sFabrikkgaten%207A%2C%205059%20Bergen!5e0!3m2!1sen!2sno!4v1710175300000!5m2!1sen!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Fabrikkgaten 7A, Bergen"
            className="absolute inset-0"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Pictures Button Component
function PicturesButton({ day, images }: { day: string, images: string[] }) {
  // Use a separate state for each dialog instance
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Early return if no images
  if (images.length === 0) return null;
  
  // Reset image index when dialog opens
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setCurrentImageIndex(0);
    }
    setOpen(open);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 font-medium"
        >
          <ImageIcon className="h-4 w-4" />
          Se bilder
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] p-4 border-0 rounded-lg overflow-hidden">
        <DialogTitle className="sr-only">Bilder fra {day}</DialogTitle>
        <div className="relative w-full h-[70vh] sm:h-[80vh]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={images[currentImageIndex]}
              alt={`Bilde ${currentImageIndex + 1} av ${images.length}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="95vw"
              priority
            />
          </div>
          
          {/* Navigation controls */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-4 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/80 hover:bg-white/90 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              onClick={prevImage}
              aria-label="Forrige bilde"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </Button>
            
            <span className="text-sm bg-white/80 px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </span>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/80 hover:bg-white/90 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              onClick={nextImage}
              aria-label="Neste bilde"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

