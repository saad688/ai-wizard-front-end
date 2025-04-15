
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Download, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExportOptionsProps {
  onExport: (format: string, quality: number, sampleRate: number) => void;
}

const ExportOptions = ({ onExport }: ExportOptionsProps) => {
  const [format, setFormat] = useState('mp3');
  const [quality, setQuality] = useState(320); // bitrate for mp3, quality for wav
  const [sampleRate, setSampleRate] = useState(44100);

  const handleExport = () => {
    onExport(format, quality, sampleRate);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Export Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="format" className="block mb-2">File Format</Label>
            <Select
              value={format}
              onValueChange={setFormat}
            >
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="wav">WAV</SelectItem>
                <SelectItem value="flac">FLAC</SelectItem>
                <SelectItem value="ogg">OGG</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="sampleRate" className="block mb-2">Sample Rate</Label>
            <Select
              value={sampleRate.toString()}
              onValueChange={(value) => setSampleRate(parseInt(value))}
            >
              <SelectTrigger id="sampleRate">
                <SelectValue placeholder="Select sample rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="22050">22.05 kHz</SelectItem>
                <SelectItem value="44100">44.1 kHz</SelectItem>
                <SelectItem value="48000">48 kHz</SelectItem>
                <SelectItem value="96000">96 kHz</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label className="block mb-2">Quality</Label>
          {format === 'mp3' ? (
            <RadioGroup 
              value={quality.toString()} 
              onValueChange={(value) => setQuality(parseInt(value))}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="128" id="q-128" />
                <Label htmlFor="q-128">128 kbps (Smaller file)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="192" id="q-192" />
                <Label htmlFor="q-192">192 kbps (Balanced)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="320" id="q-320" />
                <Label htmlFor="q-320">320 kbps (High quality)</Label>
              </div>
            </RadioGroup>
          ) : (
            <RadioGroup 
              value={quality.toString()} 
              onValueChange={(value) => setQuality(parseInt(value))}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="8" id="q-8" />
                <Label htmlFor="q-8">8-bit (Smaller file)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="16" id="q-16" />
                <Label htmlFor="q-16">16-bit (Standard CD quality)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="24" id="q-24" />
                <Label htmlFor="q-24">24-bit (High resolution)</Label>
              </div>
            </RadioGroup>
          )}
        </div>
      </div>
      
      <motion.div 
        className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-sm font-medium text-blue-800 mb-2">Export Summary</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>Format: {format.toUpperCase()}</li>
          <li>
            Quality: {format === 'mp3' ? `${quality} kbps` : `${quality}-bit`}
          </li>
          <li>Sample Rate: {sampleRate / 1000} kHz</li>
          {format === 'mp3' && (
            <li>Estimated file size: {((quality * 60 * 3.5) / 8 / 1024).toFixed(1)} MB per minute</li>
          )}
        </ul>
      </motion.div>
      
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <Button 
          onClick={handleExport}
          className="bg-green-600 hover:bg-green-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Audio
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
