import { HeroGeometric } from "@/components/ui/shape-landing-hero"

function Hero() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <HeroGeometric 
                badge="Introducing AuraSync"
                title1="Find Your Perfect Match" 
            />
        </div>
    )
}

export { Hero }