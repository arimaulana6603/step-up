import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

type PricingCardProps = {
  title: string
  originalPrice: string
  discountedPrice: string
  badge?: string
  features: string[]
  cta: string
}

export function PricingCard({ title, originalPrice, discountedPrice, badge, features, cta }: PricingCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 flex flex-col">
      {badge && (
        <span className="inline-block self-start rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-medium mb-3">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <div className="mt-4">
        <span className="text-sm text-black/60 line-through">{originalPrice}</span>
        <p className="text-3xl font-bold text-black mt-1">{discountedPrice}</p>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckIcon className="size-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm text-black">{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-6 bg-accent text-accent-foreground hover:opacity-90">
        <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
          {cta}
        </a>
      </Button>
    </div>
  )
}
