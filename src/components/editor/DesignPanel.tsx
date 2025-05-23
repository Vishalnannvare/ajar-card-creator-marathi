
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Undo, Redo } from "lucide-react";
import { Object as FabricObject } from "fabric";

interface DesignPanelProps {
  selectedObject: FabricObject | null;
  onFontChange: (font: string) => void;
  onColorChange: (color: string) => void;
  onUndo: () => void;
  onRedo: () => void;
}

export const DesignPanel = ({
  selectedObject,
  onFontChange,
  onColorChange,
  onUndo,
  onRedo
}: DesignPanelProps) => {
  
  return (
    <div className="space-y-6">
      {selectedObject && selectedObject.type === 'i-text' && (
        <div className="space-y-3">
          <h3 className="font-medium">Font Style</h3>
          <Select onValueChange={onFontChange} defaultValue="Noto Sans Devanagari">
            <SelectTrigger>
              <SelectValue placeholder="Font Family" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Noto Sans Devanagari">Devanagari</SelectItem>
              <SelectItem value="Poppins">Poppins</SelectItem>
              <SelectItem value="Dancing Script">Decorative</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      <div className="space-y-3">
        <h3 className="font-medium">Colors</h3>
        <div className="grid grid-cols-5 gap-2">
          {[
            "#FF6B9D", "#C471ED", "#12D8FA", "#A0E7E5", "#FFB4B4", 
            "#1a1a1a", "#FF1744", "#7B1FA2", "#1976D2", "#388E3C"
          ].map((color) => (
            <div
              key={color}
              className="w-8 h-8 rounded-lg cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <Button variant="outline" size="sm" onClick={onUndo}>
          <Undo className="h-4 w-4 mr-2" />
          Undo
        </Button>
        <Button variant="outline" size="sm" onClick={onRedo}>
          <Redo className="h-4 w-4 mr-2" />
          Redo
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 mt-4">
        <p>👆 Click directly on text to edit</p>
        <p>✏️ Double-click to edit text content</p>
        <p>🖱️ Click and drag to move elements</p>
      </div>
    </div>
  );
};
