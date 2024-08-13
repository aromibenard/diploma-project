import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
  
  export function Illustrations() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Lacerations</AccordionTrigger>
          <AccordionContent>
            <div className="h-[9rem] flex p-2 space-x-4 overflow-x-auto">
              <Image 
                src={'/laceration1.jpg'}
                height={200}
                width={200}
                alt="Laceration"
              />
              <Image 
                src={'/laceration2.jpg'}
                height={200}
                width={200}
                alt="Laceration"
              />
              <Image 
                src={'/bruises1.jpeg'}
                height={200}
                width={200}
                alt="bruises"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Burns</AccordionTrigger>
          <AccordionContent>
          <div className="h-[9rem] flex p-2 space-x-4 overflow-x-auto">
              <Image 
                src={'/burns1.jpg'}
                height={200}
                width={200}
                alt="burns"
              />
              <Image 
                src={'/laceration1.jpg'}
                height={200}
                width={200}
                alt="burns"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Cuts & Bruises</AccordionTrigger>
          <AccordionContent>
          <div className="h-[10rem] flex p-2 space-x-4 overflow-x-auto">
              <Image 
                src={'/bruises1.jpeg'}
                height={200}
                width={200}
                alt="bruises"
              />
              <Image 
                src={'/laceration2.jpg'}
                height={200}
                width={200}
                alt="bruises"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  