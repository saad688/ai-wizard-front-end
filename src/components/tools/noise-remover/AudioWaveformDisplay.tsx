
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AudioWaveformDisplayProps {
  audioBuffer: AudioBuffer;
  zoomLevel: number;
  isPlaying: boolean;
  onRangeSelect: (range: [number, number] | null) => void;
}

const AudioWaveformDisplay = ({ 
  audioBuffer, 
  zoomLevel, 
  isPlaying,
  onRangeSelect 
}: AudioWaveformDisplayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);
  const [currentPlayPosition, setCurrentPlayPosition] = useState(0);
  
  // Request Animation Frame ID for playback position animation
  const animationRef = useRef<number | null>(null);
  
  // For calculating canvas positions from mouse events
  const canvasPositionRef = useRef({ left: 0, width: 0 });
  
  // For playback timing
  const playbackStartTimeRef = useRef(0);
  
  useEffect(() => {
    drawWaveform();
    
    // Store canvas position for mouse event calculations
    const updateCanvasPosition = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        canvasPositionRef.current = { 
          left: rect.left, 
          width: rect.width 
        };
      }
    };
    
    updateCanvasPosition();
    window.addEventListener('resize', updateCanvasPosition);
    
    return () => {
      window.removeEventListener('resize', updateCanvasPosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [audioBuffer, zoomLevel]);
  
  useEffect(() => {
    if (isPlaying) {
      playbackStartTimeRef.current = Date.now();
      animatePlayPosition();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }
  }, [isPlaying]);
  
  const animatePlayPosition = () => {
    const elapsedTime = (Date.now() - playbackStartTimeRef.current) / 1000;
    const normalizedPosition = elapsedTime / audioBuffer.duration;
    
    setCurrentPlayPosition(normalizedPosition);
    drawWaveform();
    
    if (normalizedPosition >= 1) {
      setCurrentPlayPosition(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    } else {
      animationRef.current = requestAnimationFrame(animatePlayPosition);
    }
  };
  
  const drawWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get channel data (mono or left channel for stereo)
    const channelData = audioBuffer.getChannelData(0);
    
    // Calculate step size based on zoom level
    const step = Math.ceil(channelData.length / (canvas.width * zoomLevel));
    
    // Draw waveform
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4F46E5'; // Indigo color
    
    const center = canvas.height / 2;
    
    ctx.beginPath();
    
    // Draw the visible portion of the waveform
    for (let i = 0; i < canvas.width; i++) {
      const dataIndex = Math.floor(i * step);
      if (dataIndex >= channelData.length) break;
      
      // Calculate the max amplitude for this segment
      let min = 1.0;
      let max = -1.0;
      
      for (let j = 0; j < step; j++) {
        const sampleIndex = dataIndex + j;
        if (sampleIndex < channelData.length) {
          const sample = channelData[sampleIndex];
          if (sample < min) min = sample;
          if (sample > max) max = sample;
        }
      }
      
      // Draw the vertical line for this segment
      const x = i;
      const heightMin = min * center;
      const heightMax = max * center;
      
      ctx.moveTo(x, center + heightMin);
      ctx.lineTo(x, center + heightMax);
    }
    
    ctx.stroke();
    
    // Draw selection if available
    if (selectionStart !== null && selectionEnd !== null) {
      const startX = selectionStart * canvas.width;
      const endX = selectionEnd * canvas.width;
      
      ctx.fillStyle = 'rgba(79, 70, 229, 0.2)'; // Translucent indigo
      ctx.fillRect(startX, 0, endX - startX, canvas.height);
      
      // Draw selection boundaries
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.8)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(startX, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(endX, 0);
      ctx.lineTo(endX, canvas.height);
      ctx.stroke();
    }
    
    // Draw playback position indicator
    if (isPlaying) {
      const playbackX = currentPlayPosition * canvas.width;
      
      ctx.strokeStyle = '#EF4444'; // Red color
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(playbackX, 0);
      ctx.lineTo(playbackX, canvas.height);
      ctx.stroke();
    }
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    
    setIsDragging(true);
    setSelectionStart(x);
    setSelectionEnd(x);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || selectionStart === null) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    
    setSelectionEnd(x);
    drawWaveform();
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (selectionStart !== null && selectionEnd !== null) {
      // Ensure start is before end
      const start = Math.min(selectionStart, selectionEnd);
      const end = Math.max(selectionStart, selectionEnd);
      
      // Only register selection if it's large enough
      if (Math.abs(end - start) > 0.01) {
        onRangeSelect([start, end]);
      } else {
        // Clear selection if it's too small (consider it a click)
        setSelectionStart(null);
        setSelectionEnd(null);
        onRangeSelect(null);
        drawWaveform();
      }
    }
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };
  
  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />
      
      {/* Time indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
        <span>0:00</span>
        <span>{Math.floor(audioBuffer.duration / 60)}:{Math.floor(audioBuffer.duration % 60).toString().padStart(2, '0')}</span>
      </div>
      
      {/* Zoom indicator */}
      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
        {zoomLevel.toFixed(1)}x
      </div>
      
      {/* Interactive elements for playback */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500"
        initial={{ width: '0%' }}
        animate={{ width: `${currentPlayPosition * 100}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
};

export default AudioWaveformDisplay;
