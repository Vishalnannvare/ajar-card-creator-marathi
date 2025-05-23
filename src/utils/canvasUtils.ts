
import { Canvas, IText, ITextOptions } from 'fabric';

// Helper function to add editable text
export const addEditableText = (
  canvas: Canvas, 
  text: string, 
  left: number, 
  top: number, 
  options: ITextOptions
) => {
  const textObj = new IText(text, {
    left: left,
    top: top,
    originX: options.textAlign === 'center' ? 'center' : (options.textAlign === 'right' ? 'right' : 'left'),
    originY: 'center',
    ...options
  });
  canvas.add(textObj);
  return textObj;
};
