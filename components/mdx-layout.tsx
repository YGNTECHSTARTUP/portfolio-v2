import { Container } from "@/components/ui/container"

export function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="max-w-3xl py-10">
      <article className="prose prose-gray dark:prose-invert">
        {children}
      </article>
    </Container>
  )
}