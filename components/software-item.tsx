"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

interface SoftwareItemProps {
  name: string
  description: string
  url:string
}



export function SoftwareItem({ name, description, url }: SoftwareItemProps) {

  return (
  
      <Card className="p-4 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-4">
          <Image src={url} alt={name} width={50} height={50} />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
  )
}

