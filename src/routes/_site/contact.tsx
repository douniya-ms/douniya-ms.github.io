import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_site/contact')({
  component: () => <p className="p-6">Contact</p>,
})