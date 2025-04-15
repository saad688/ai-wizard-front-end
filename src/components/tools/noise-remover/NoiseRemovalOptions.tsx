
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Mic, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface NoiseRemovalOptionsProps {
  processingMethod: 'regular' | 'speech' | 'deep';
  setProcessingMethod: (method: 'regular' | 'speech' | 'deep') => void;
  onProcess: () => void;
  isProcessing: boolean;
}

const NoiseRemovalOptions = ({
  processingMethod,
  setProcessingMethod,
  onProcess,
  isProcessing
}: NoiseRemovalOptionsProps) => {
  const processingMethods = [
    {
      id: 'regular',
      name: 'Regular Noise Removal',
      description: 'Good for general noises and faster processing',
      badge: 'Fast',
      icon: Shield,
      color: 'bg-green-50 text-green-700'
    },
    {
      id: 'speech',
      name: 'Speech Based Noise Removal',
      description: 'Optimized for voice recordings with speech',
      badge: 'Medium',
      icon: Mic,
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'deep',
      name: 'DeepFilter Noise Removal',
      description: 'Superior quality for complex noise patterns',
      badge: 'Slow',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-700'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Select Noise Removal Method</h3>
        <p className="text-gray-500 mb-4">Choose the best method based on your audio content</p>
        
        <RadioGroup 
          value={processingMethod} 
          onValueChange={(value) => setProcessingMethod(value as 'regular' | 'speech' | 'deep')}
          className="space-y-4"
        >
          {processingMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`relative border rounded-lg p-4 flex items-start gap-4 cursor-pointer ${
                  processingMethod === method.id 
                    ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem 
                  value={method.id} 
                  id={method.id}
                  className="absolute top-4 left-4"
                />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method.color.split(' ')[0]}`}>
                  <Icon className={`h-5 w-5 ${method.color.split(' ')[1]}`} />
                </div>
                <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="text-base font-medium">{method.name}</span>
                    <Badge variant="outline" className={method.color}>{method.badge}</Badge>
                  </div>
                  <p className="text-gray-500 mt-1">{method.description}</p>
                </Label>
              </motion.div>
            );
          })}
        </RadioGroup>
      </div>
      
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <Button 
          onClick={onProcess}
          disabled={isProcessing}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Remove Noise
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NoiseRemovalOptions;
