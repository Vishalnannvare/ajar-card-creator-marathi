
import { Canvas } from 'fabric';
import { templateConfigs } from '@/utils/templateConfigs';
import { toast } from 'sonner';
import { loadBirthdayTemplate } from './BirthdayTemplate';

// Dynamic template loading function
export const loadTemplate = (
  canvas: Canvas, 
  id: string, 
  onTemplateLoaded: () => void
): boolean => {
  // Check if we have a config for this template
  const config = templateConfigs[id as keyof typeof templateConfigs];
  
  if (!config) {
    toast.error(`Template with ID "${id}" not found`);
    return false;
  }
  
  // Set background based on template config
  canvas.setBackgroundColor(config.background as any, canvas.renderAll.bind(canvas));
  
  // Add bunting flags at the top if available in the config
  if (config.buntingPath) {
    const buntingImg = document.createElement('img');
    buntingImg.src = config.buntingPath;
    buntingImg.onload = () => {
      const bunting = new fabric.Image(buntingImg, {
        left: 0,
        top: 0,
        width: 600,
        height: 120,
        selectable: false,
        opacity: 0.8
      });
      canvas.add(bunting);
      canvas.sendToBack(bunting);
    };
  }

  if (id === "birthday-template") {
    loadBirthdayTemplate(canvas);
  }
  
  toast.success(`${id.replace('-', ' ')} template loaded! Click on any text to edit directly.`);
  onTemplateLoaded();
  return true;
};
