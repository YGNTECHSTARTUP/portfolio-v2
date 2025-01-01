
import Image from "next/legacy/image"
import { Spotlight } from "./ui/spotlight"
import { Container } from "./ui/container"

export function Hero() {
  return (
    
    <div className="relative bg-transparent bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 ">
       <Spotlight
        className="-top-40 right-0 absolute md:left-48 md:-top-20"
        fill="orange"
      />
      <Container>
          
      <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-10 ">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Gagan Yarramsetty
            </h1>
            <p className="text-xl flex text-muted-foreground">
             Solo Developer Kinda Student 🦀
            </p>
            <p className="max-w-xl text-muted-foreground">
              Learning about Real Time Data Distribution and Trying to Grind DSA
            </p>
          </div>
          <div
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/pic.png"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      </Container>
    
    </div>
  )
}

