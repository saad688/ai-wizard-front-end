
import { Check, PlusCircle, MinusCircle } from 'lucide-react';

interface CompareTabProps {
  tool: any;
}

const CompareTab = ({ tool }: CompareTabProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How We Compare</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left font-semibold text-gray-800 border-b border-gray-200 min-w-[200px]">Features</th>
              <th className="p-4 text-center font-semibold text-gray-800 border-b border-gray-200 min-w-[180px]">
                <span className="block text-primary-blue">{tool.name}</span>
              </th>
              {tool.competitors && tool.competitors.map((competitor: any, index: number) => (
                <th key={index} className="p-4 text-center font-semibold text-gray-800 border-b border-gray-200 min-w-[180px]">
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Sentiment Analysis</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Readability Metrics</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Keyword Extraction</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Grammar Checking</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Multiple Languages</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">API Access</td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
              <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Accuracy</td>
              <td className="p-4 border-b border-gray-200 text-center">92%</td>
              <td className="p-4 border-b border-gray-200 text-center">78%</td>
              <td className="p-4 border-b border-gray-200 text-center">85%</td>
              <td className="p-4 border-b border-gray-200 text-center">80%</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {tool.competitors && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tool.competitors.map((competitor: any, index: number) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {tool.name} vs. {competitor.name}
              </h3>
              
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  {competitor.name} Advantages
                </h4>
                <ul className="space-y-2">
                  {competitor.pros.map((pro: string, i: number) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <PlusCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  {competitor.name} Disadvantages
                </h4>
                <ul className="space-y-2">
                  {competitor.cons.map((con: string, i: number) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <MinusCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompareTab;
