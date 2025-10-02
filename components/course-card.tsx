import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type CourseCardProps = {
  slug: string
  title: string
  description: string
}

export function CourseCard({ slug, title, description }: CourseCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-pretty">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
          <Link href={`/kursus/${slug}`}>Lihat Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
