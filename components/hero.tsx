import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { HeroHeader } from "./header"

function Hero() {
    return (
        <>
            <HeroHeader />
            <HeroGeometric 
                badge="Introducing AuraSync"
                title1="Find Your Perfect Match"
            />
        </>
    )
}

export { Hero }