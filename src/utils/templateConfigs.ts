
// Define types for template configurations
export interface TemplateBackground {
  type: 'linear' | 'solid';
  coords?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  colorStops?: Array<{
    offset: number;
    color: string;
  }>;
  color?: string;
}

export interface TemplateConfig {
  background: TemplateBackground;
  buntingPath?: string;
}

// Define a templates mapping for better management
export const templateConfigs: Record<string, TemplateConfig> = {
  "birthday-template": {
    background: {
      type: 'linear',
      coords: {
        x1: 0,
        y1: 0,
        x2: 600,
        y2: 800
      },
      colorStops: [
        { offset: 0, color: '#f9c5d1' },
        { offset: 1, color: '#f3e7e9' }
      ]
    },
    buntingPath: "/lovable-uploads/656232f1-7e41-4fb6-8f98-59eedbe9546a.png",
  }
};
