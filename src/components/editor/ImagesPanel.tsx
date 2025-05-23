
import React from "react";
import { ImageIcon } from "lucide-react";

interface ImagesPanelProps {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDecorationAdd: (type: string) => void;
}

export const ImagesPanel = ({ onImageUpload, onDecorationAdd }: ImagesPanelProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium">Upload Image</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input 
            type="file" 
            accept="image/*"
            id="image-upload"
            onChange={onImageUpload}
            className="hidden"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          </label>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium">Decorative Elements</h3>
        <div className="grid grid-cols-2 gap-3">
          <div 
            className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => onDecorationAdd('balloons')}
          >
            <div className="text-2xl mb-1">🎈</div>
            <p className="text-xs">Balloons</p>
          </div>
          <div 
            className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => onDecorationAdd('cake')}
          >
            <div className="text-2xl mb-1">🎂</div>
            <p className="text-xs">Cake</p>
          </div>
          <div 
            className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => onDecorationAdd('confetti')}
          >
            <div className="text-2xl mb-1">🎊</div>
            <p className="text-xs">Confetti</p>
          </div>
          <div 
            className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => onDecorationAdd('star')}
          >
            <div className="text-2xl mb-1">⭐</div>
            <p className="text-xs">Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};
