
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/privacy",
    description:
      "Review the privacy policy for VetAssist",
  },
  {
    title: "Terms of Use",
    href: "/terms",
    description:
      "Terms of use for VetAssist",
  },
  {
    title: "About",
    href: "/about",
    description:
      "Learn more about VetAssist",
  }
]

export function NavMenu() {
  
  const MobileMenuItem: React.FC<{ href: string; title: string }> = ({ href, title }) => (
    <li>
      <NavigationMenuLink asChild>
        <a className="block py-2 px-4 text-gray-800 hover:bg-violet-200" href={href}>
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  )

  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        {/* Hamburger Menu*/}
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger className="bg-transparent text-gray-700">Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4">
              <MobileMenuItem href="/" title="Home" />
              {/* <MobileMenuItem href="/services" title="Services" /> */}
              <MobileMenuItem href="/resources" title="Resources" />
              <MobileMenuItem href="/contact" title="Contact Us" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Full Navbar*/}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-transparent text-gray-700">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                      VetAssist
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Get first aid instructions for any injuries or accidents involving pets and farm animals.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Services">
                Browse through the types of services available.
              </ListItem>
              <ListItem href="/resources" title="Resources">
                Collection of relevant documents and resources.
              </ListItem>
              <ListItem href="/newsletter" title="Newsletter">
                View our newsletter
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-transparent text-gray-700">About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-700`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
