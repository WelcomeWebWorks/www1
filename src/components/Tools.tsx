export default function Tools() {
  const toolCategories = {
    'Cloud': [
      { name: 'AMAZON AWS', color: '#232F3E' },
      { name: 'GOOGLE CLOUD', color: '#4285F4' }
    ],
    'Hosting/SaaS': [
      { name: 'HEROKU', color: '#430098' },
      { name: 'NETLIFY', color: '#00C7B7' },
      { name: 'VERCEL', color: '#000000' }
    ],
    'Languages': [
      { name: 'HTML5', color: '#E34F26' },
      { name: 'JAVASCRIPT', color: '#F7DF1E' },
      { name: 'PYTHON', color: '#3776AB' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'SHELL SCRIPT', color: '#4EAA25' },
      { name: 'GO', color: '#00ADD8' }
    ],
    'Frameworks': [
      { name: 'NODE.JS', color: '#339933' },
      { name: 'VUEJS', color: '#4FC08D' },
      { name: 'BOOTSTRAP', color: '#7952B3' },
      { name: 'LARAVEL', color: '#FF2D20' },
      { name: 'STRAPI', color: '#2F2E8B' }
    ],
    'Version Control': [
      { name: 'GITHUB', color: '#181717' },
      { name: 'GITLAB', color: '#FCA121' }
    ],
    'Servers': [
      { name: 'APACHE', color: '#D22128' }
    ],
    'Databases': [
      { name: 'MYSQL', color: '#4479A1' },
      { name: 'MONGODB', color: '#47A248' },
      { name: 'POSTGRESQL', color: '#4169E1' }
    ],
    'Deployment': [
      { name: 'DOCKER', color: '#2496ED' },
      { name: 'KUBERNETES', color: '#326CE5' },
      { name: 'JENKINS', color: '#D24939' },
      { name: 'TERRAFORM', color: '#7B42BC' },
      { name: 'CIRCLECI', color: '#343434' },
      { name: 'GITHUB ACTIONS', color: '#2088FF' }
    ],
    'Metric & Analytics': [
      { name: 'DATADOG', color: '#632CA6' },
      { name: 'PROMETHEUS', color: '#E6522C' },
      { name: 'GRAFANA', color: '#F46800' },
      { name: 'JAEGER', color: '#66CFE3' }
    ],
    'Service Mesh': [
      { name: 'ISTIO', color: '#466BB0' },
      { name: 'KUMA', color: '#290B53' }
    ],
    'Other': [
      { name: 'VISUAL STUDIO CODE', color: '#007ACC' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Technologies and Tools</h2>
        <div className="w-12 h-1 rounded-full" 
          style={{ backgroundImage: "linear-gradient(142.17deg, #3086ff 6.66%, #304cfd 91.48%)" }}>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-[#1a1d21] rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left w-1/4 bg-[#22262a] text-white font-semibold">Category</th>
              <th className="py-3 px-4 text-left bg-[#22262a] text-white font-semibold">Tools</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(toolCategories).map(([category, tools]) => (
              <tr key={category} className="border-t border-[#2a2e32]">
                <td className="py-4 px-4 text-white font-medium">{category}</td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="px-3 py-1 rounded text-white text-sm font-medium"
                        style={{ 
                          backgroundColor: tool.color,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}