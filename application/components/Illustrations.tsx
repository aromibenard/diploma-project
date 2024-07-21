import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Illustrations() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Lacerations</AccordionTrigger>
          <AccordionContent>
            ..in development
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Burns</AccordionTrigger>
          <AccordionContent>
            ...in development
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Cuts & Bruises</AccordionTrigger>
          <AccordionContent>
            ...in development
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  