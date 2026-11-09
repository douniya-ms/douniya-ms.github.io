import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_site/work')({
  component: () => <p className="p-6">Work</p>,
})