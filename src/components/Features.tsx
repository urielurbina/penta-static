export default function Features() {
  const features = [
    {
      title: "Feature 1",
      description: "Description of the first amazing feature of our platform.",
      icon: "🚀"
    },
    {
      title: "Feature 2",
      description: "Description of the second amazing feature of our platform.",
      icon: "⚡"
    },
    {
      title: "Feature 3",
      description: "Description of the third amazing feature of our platform.",
      icon: "💡"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 