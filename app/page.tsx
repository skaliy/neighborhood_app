"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Transition } from "@/components/ui/transition"
import Image from "next/image"

export default function NeighborhoodExperience() {
  const [currentDay, setCurrentDay] = useState<string>("welcome")
  
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

  const goToDay = (day: string) => {
    setCurrentDay(day)
    // Scroll to top without animation
    window.scrollTo(0, 0)
  }

  const restartExperience = () => {
    setCurrentDay("welcome")
    window.scrollTo(0, 0)
  }

  // Calculate progress percentage
  const getProgress = () => {
    const currentIndex = dayOrder.indexOf(currentDay)
    if (currentIndex <= 0) return 0
    if (currentIndex >= dayOrder.length - 1) return 100
    
    return Math.round((currentIndex / (dayOrder.length - 2)) * 100)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="container max-w-md mx-auto px-4 py-6 sm:py-8 relative">
        {/* Progress indicator */}
        {currentDay !== "welcome" && currentDay !== "end-screen" && (
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">{getProgress()}% fullført</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-primary h-2.5 rounded-full" 
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
            <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
              <div className="max-w-sm mx-auto">
                <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-primary">OPPLEV EN UKE I DITT NYE NABOLAG!</h1>
                <p className="mb-8 sm:mb-10 text-base sm:text-base text-muted-foreground">
                  Velkommen til et nabolag som har alt du trenger for en behagelig og praktisk hverdag! Med enkel tilgang
                  til transport, butikker, restauranter og fritidsaktiviteter, kan du nyte en balansert livsstil – enten du
                  er på farten eller vil slappe av.
                </p>
                
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-100 mb-8 sm:mb-10">
                  <Image 
                    src="/kronstad.png" 
                    alt="Kronstad neighborhood" 
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority={true}
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </div>
                
                <Button size="lg" className="w-full max-w-xs font-semibold text-base py-5 sm:py-6 mx-auto no-select" onClick={() => goToDay("monday")}>
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
                  description="Kun få minutters gange til holdeplassen, med både Linje 1 og 2 lett tilgjengelig."
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
                  description="En rolig 1 km sløyfe rett utenfor døren."
                  onClick={() => goToDay("wednesday")}
                />
                <DayOption
                  emoji="🏋️"
                  title="Sammen Kronstad"
                  description="Et  moderne treningssenter med varierte treningsmuligheter."
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
                  emoji="🛒"
                  title="Bunnpris (søndagsåpent)"
                  description="Ca. 350m fra boligen."
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
                  description="Nyt en rolig stund."
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
                  description="Bare 10 minutters gange til fotballfest og elektrisk stemning!"
                  onClick={() => goToDay("end-screen")}
                />
                <DayOption
                  emoji="🎭"
                  title="Forum Scene"
                  description="Konserter, teater og stand-up – kulturen er rett rundt hjørnet."
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
      className="relative flex cursor-pointer flex-col justify-center border-l-4 border-l-primary p-4 sm:p-5 no-select"
      onClick={onClick}
      role="button"
      aria-label={`Velg ${title}`}
    >
      <div className="mb-1 sm:mb-2 flex items-center gap-2 sm:gap-3 pr-6 sm:pr-8 font-semibold text-sm sm:text-base">
        <span className="text-xl sm:text-2xl">{emoji}</span> {title}
      </div>
      {description && <p className="text-sm sm:text-base text-muted-foreground pr-6 sm:pr-8">{description}</p>}
      <ChevronRight 
        className="absolute right-3 sm:right-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-primary opacity-70" 
      />
    </Card>
  )
}

