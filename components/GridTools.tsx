import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tools = [
  {
    name: "Image",
    description: "Create images with Stable Diffusion",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    icon: "🎨",
  },
  {
    name: "Video",
    description: "Generate videos with Stable Video Diffusion",
    badge: null,
    icon: "🎬",
  },
  {
    name: "Realtime",
    description: "Real-time rendering on a canvas",
    badge: null,
    icon: "⚡",
  },
  {
    name: "Enhance",
    description: "Upscale and enhance your images",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    icon: "✨",
  },
  {
    name: "AI",
    description: "Chat with language models",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    icon: "🤖",
  },
  {
    name: "Video Enhance",
    description: "Enhance videos with AI",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    icon: "📹",
  },
  {
    name: "Motion",
    description: "Add motion to your images",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    icon: "🎭",
  },
  {
    name: "Train",
    description: "Train AI to replicate your style",
    badge: null,
    icon: "🎯",
  },
]

export function ToolsGrid() {
  return (
    <section className="w-full py-8 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Generate</h2>
          <Button variant="ghost" className="text-sm text-muted-foreground">
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                    {tool.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{tool.name}</h3>
                      {tool.badge && (
                        <Badge className={`text-xs px-2 py-0.5 ${tool.badgeColor} text-white`}>{tool.badge}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
