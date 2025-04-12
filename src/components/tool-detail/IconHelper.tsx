
import { 
  Image, MessageSquare, LineChart, FileText, Code, Mic, Star, 
  Download, Share, Info, CheckCircle, PlusCircle, MinusCircle, 
  ArrowRight, Check, FileType, FileText as FileText2, Sparkles, AlertCircle
} from 'lucide-react';

// Helper function to get an icon component by name
export const getIconByName = (iconName: string, className: string = "h-6 w-6") => {
  const icons: { [key: string]: any } = {
    Image,
    MessageSquare,
    LineChart,
    FileText,
    Code,
    Mic,
    Star,
    Download,
    Share,
    Info,
    CheckCircle,
    PlusCircle,
    MinusCircle,
    ArrowRight,
    Check,
    FileType,
    FileText2,
    Sparkles,
    AlertCircle
  };

  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};
