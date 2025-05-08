
import React from 'react';

interface ToolIconProps {
  type: 'noise-remover' | 'image-enhancer' | 'text-analyzer' | 'data-visualizer' | 'code-assistant' | 'ai-assistant' | 'document-parser' | 'voice-transcriber';
  className?: string;
}

const ToolIcon: React.FC<ToolIconProps> = ({ type, className = "w-16 h-16" }) => {
  const baseClass = `${className} transition-transform duration-700 group-hover:rotate-12`;
  
  switch (type) {
    case 'noise-remover':
      return (
        <img src="/images/ai-voice.svg" alt="Noise Remover" className={baseClass} aria-hidden="true" />
      );
    case 'image-enhancer':
      return (
        <img src="/images/ai-brain.svg" alt="Image Enhancer" className={baseClass} aria-hidden="true" />
      );
    case 'text-analyzer':
      return (
        <img src="/images/ai-document.svg" alt="Text Analyzer" className={baseClass} aria-hidden="true" />
      );
    case 'data-visualizer':
      return (
        <img src="/images/ai-analyze.svg" alt="Data Visualizer" className={baseClass} aria-hidden="true" />
      );
    case 'code-assistant':
      return (
        <img src="/images/ai-code.svg" alt="Code Assistant" className={baseClass} aria-hidden="true" />
      );
    case 'ai-assistant':
      return (
        <img src="/images/ai-chip.svg" alt="AI Assistant" className={baseClass} aria-hidden="true" />
      );
    case 'document-parser':
      return (
        <img src="/images/ai-document.svg" alt="Document Parser" className={baseClass} aria-hidden="true" />
      );
    case 'voice-transcriber':
      return (
        <img src="/images/ai-voice.svg" alt="Voice Transcriber" className={baseClass} aria-hidden="true" />
      );
    default:
      return (
        <img src="/images/ai-chip.svg" alt="AI Tool" className={baseClass} aria-hidden="true" />
      );
  }
};

export default ToolIcon;
