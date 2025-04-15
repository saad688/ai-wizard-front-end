
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  Download, 
  Play, 
  Pause, 
  Scissors, 
  Save, 
  Trash2, 
  Settings, 
  AudioWaveform,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import AudioWaveformDisplay from './AudioWaveformDisplay';
import NoiseRemovalOptions from './NoiseRemovalOptions';
import ExportOptions from './ExportOptions';
import BackgroundParticles from './BackgroundParticles';

const NoiseRemoverInterface = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedRange, setSelectedRange] = useState<[number, number] | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [processingMethod, setProcessingMethod] = useState<'regular' | 'speech' | 'deep'>('regular');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedAudioBuffer, setProcessedAudioBuffer] = useState<AudioBuffer | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initialize AudioContext
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    return () => {
      // Cleanup
      if (audioSourceRef.current) {
        audioSourceRef.current.stop();
        audioSourceRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    
    // Check if the file is an mp3 or wav
    if (fileExt !== 'mp3' && fileExt !== 'wav') {
      toast.error('Please upload an MP3 or WAV file');
      return;
    }

    setAudioFile(file);
    
    // Read the file
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (!e.target || !e.target.result) return;

      try {
        const arrayBuffer = e.target.result as ArrayBuffer;
        const audioContext = audioContextRef.current as AudioContext;
        const decodedData = await audioContext.decodeAudioData(arrayBuffer);
        
        setAudioBuffer(decodedData);
        setProcessedAudioBuffer(null); // Reset processed audio
        toast.success('Audio file loaded successfully');
      } catch (error) {
        console.error('Error decoding audio data:', error);
        toast.error('Failed to decode audio file');
      }
    };
    reader.onerror = () => {
      toast.error('Error reading file');
    };
    reader.readAsArrayBuffer(file);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePlayPause = () => {
    if (!audioContextRef.current || !audioBuffer) return;
    
    if (isPlaying) {
      // Stop playback
      if (audioSourceRef.current) {
        audioSourceRef.current.stop();
        audioSourceRef.current.disconnect();
        audioSourceRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start playback
      const bufferToPlay = processedAudioBuffer || audioBuffer;
      const source = audioContextRef.current.createBufferSource();
      source.buffer = bufferToPlay;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        audioSourceRef.current = null;
      };
      
      source.start(0);
      audioSourceRef.current = source;
      setIsPlaying(true);
    }
  };

  const handleProcessAudio = () => {
    if (!audioBuffer) return;
    
    setIsProcessing(true);
    
    // Simulate processing with a delay
    const processingTime = 
      processingMethod === 'regular' ? 1000 : 
      processingMethod === 'speech' ? 2500 : 
      4000; // deep processing takes longest
    
    setTimeout(() => {
      // In a real app, this would be where you implement actual noise reduction
      // For now, we're just passing the original audio buffer
      setProcessedAudioBuffer(audioBuffer);
      setIsProcessing(false);
      toast.success(`${getProcessingMethodName(processingMethod)} noise removal completed`);
    }, processingTime);
  };

  const getProcessingMethodName = (method: 'regular' | 'speech' | 'deep') => {
    switch (method) {
      case 'regular': return 'Regular';
      case 'speech': return 'Speech Based';
      case 'deep': return 'DeepFilter';
    }
  };

  const handleExport = (format: string, quality: number, sampleRate: number) => {
    if (!processedAudioBuffer) {
      toast.error('Process audio before exporting');
      return;
    }
    
    toast.success(`Audio exported as ${format.toUpperCase()}`);
    // In a real implementation, this would create and download a file
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-soft overflow-hidden">
      <BackgroundParticles />
      
      <div className="relative z-10 p-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {/* File Upload Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <input
              type="file"
              ref={fileInputRef}
              accept=".mp3,.wav"
              className="hidden"
              onChange={handleFileUpload}
            />
            
            {!audioFile ? (
              <div className="text-center">
                <AudioWaveform className="w-16 h-16 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-medium mb-2">Upload Audio File</h3>
                <p className="text-gray-500 mb-4">MP3 or WAV formats accepted</p>
                <Button 
                  onClick={triggerFileInput}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Select File
                </Button>
              </div>
            ) : (
              <div className="text-center w-full">
                <div className="flex items-center justify-center mb-4">
                  <AudioWaveform className="w-8 h-8 text-blue-500 mr-2" />
                  <div className="text-left">
                    <h3 className="text-lg font-medium">{audioFile.name}</h3>
                    <p className="text-sm text-gray-500">
                      {(audioFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button
                    onClick={triggerFileInput}
                    variant="outline"
                    size="sm"
                  >
                    Change File
                  </Button>
                  <Button
                    onClick={() => {
                      setAudioFile(null);
                      setAudioBuffer(null);
                      setProcessedAudioBuffer(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
          
          {/* Audio Waveform Section */}
          {audioBuffer && (
            <motion.div 
              variants={itemVariants}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <Button 
                    onClick={handlePlayPause} 
                    variant="outline" 
                    size="sm"
                    disabled={isProcessing}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span className="ml-1">{isPlaying ? 'Pause' : 'Play'}</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={!selectedRange || isProcessing}
                  >
                    <Scissors className="w-4 h-4 mr-1" />
                    Cut Selection
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    onClick={handleZoomOut} 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button 
                    onClick={handleZoomIn} 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    disabled={zoomLevel >= 4}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="h-48 bg-white rounded border border-gray-200 overflow-hidden">
                <AudioWaveformDisplay 
                  audioBuffer={processedAudioBuffer || audioBuffer}
                  zoomLevel={zoomLevel}
                  isPlaying={isPlaying}
                  onRangeSelect={setSelectedRange}
                />
              </div>
            </motion.div>
          )}
          
          {/* Processing Options */}
          {audioBuffer && (
            <motion.div variants={itemVariants}>
              <Tabs defaultValue="process" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="process">Process Audio</TabsTrigger>
                  <TabsTrigger value="export" disabled={!processedAudioBuffer}>Export</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="process" className="p-4 border rounded-lg">
                  <NoiseRemovalOptions 
                    processingMethod={processingMethod}
                    setProcessingMethod={setProcessingMethod}
                    onProcess={handleProcessAudio}
                    isProcessing={isProcessing}
                  />
                </TabsContent>
                
                <TabsContent value="export" className="p-4 border rounded-lg">
                  <ExportOptions onExport={handleExport} />
                </TabsContent>
                
                <TabsContent value="settings" className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Advanced Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Noise Threshold</label>
                      <Slider defaultValue={[30]} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Sensitivity</label>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Frequency Range</label>
                      <Slider 
                        defaultValue={[100, 10000]} 
                        min={20} 
                        max={20000} 
                        step={10} 
                      />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">20 Hz</span>
                        <span className="text-xs text-gray-500">20,000 Hz</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NoiseRemoverInterface;
