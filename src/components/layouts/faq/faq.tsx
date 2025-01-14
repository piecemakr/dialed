'use client'

import Image from 'next/image'

import { faqs } from './data/data'

import { eonsDiscount } from "~/components/global/discount"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Button } from '~/components/ui/button'
import { ShoppingCart } from 'lucide-react'


export default function FAQ() {
  return (
    <section id="faq" className="pt-24 pb-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-36 items-start">
          <div>
            <Image 
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              className="mb-8 pt-4 opacity-80"
            />
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about DIALED.</p>

            
            <div className="hidden md:flex flex-col gap-4 items-start ">
              <h3 className="mt-16 font-medium text-2xl" >Ready to Buy?</h3>
              <Button 
                size="lg" 
                className="w-full md:w-auto text-md font-thin h-14"
                onClick={() => window.location.href = eonsDiscount}
                
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Buy DIALED
              </Button>
              <span className="font-sans italic text-gray-700 text-xs">A 10% discount will be automatically applied to your first purchase when using any link on this page.</span>
            </div>
          </div>
          <div className="lg:col-span-2 pt-20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="flex flex-col px-4 justify-center h-auto bg-gray-50 hover:bg-gray-200 data-[state=open]:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg py-6 font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
