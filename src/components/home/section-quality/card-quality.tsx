import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type CardQualityProps = {
  Icon: React.JSX.Element
  TitleSpan: React.JSX.Element
  Content: React.JSX.Element
} & React.ComponentPropsWithRef<'div'>

function CardQuality({
  Icon,
  TitleSpan,
  Content,
  className,
  ...props
}: CardQualityProps) {
  return (
    <>
      <Card className={cn('bg-transparent text-zinc-50', className)} {...props}>
        <CardHeader>
          {Icon}
          <CardTitle className="text-center">{TitleSpan}</CardTitle>
        </CardHeader>
        <CardContent>{Content}</CardContent>
      </Card>
    </>
  )
}

export default CardQuality
