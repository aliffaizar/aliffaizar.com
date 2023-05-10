export default function TextEditor({
  url,
  className,
}: {
  url: string
  className?: string
}) {
  return <iframe src={url} className={className} />
}
