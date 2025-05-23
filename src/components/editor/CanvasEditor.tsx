
import { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import { loadTemplate } from "./templates/TemplateLoader";

interface CanvasEditorProps {
  templateId: string | undefined;
  onCanvasReady: (canvas: fabric.Canvas) => void;
  onObjectSelected: (object: fabric.Object | null) => void;
  onTemplateLoaded: () => void;
}

export const CanvasEditor = ({ 
  templateId, 
  onCanvasReady, 
  onObjectSelected,
  onTemplateLoaded 
}: CanvasEditorProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric Canvas
    const fabricCanvas = new fabric.Canvas("editor-canvas", {
      width: 600,
      height: 800,
      backgroundColor: "#f8f2ff",
      preserveObjectStacking: true,
    });
    
    // Add undo/redo functionality
    fabricCanvas.undo = function() {
      if (this._objects.length > 0) {
        const lastObject = this._objects.pop();
        if (lastObject) {
          this.remove(lastObject);
          this.renderAll();
        }
      }
    };
    
    fabricCanvas.redo = function() {
      console.log("Redo functionality would be implemented here");
      // Actual implementation would require storing removed objects
    };
    
    onCanvasReady(fabricCanvas);

    // Event listener for object selection
    fabricCanvas.on("selection:created", () => {
      onObjectSelected(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:updated", () => {
      onObjectSelected(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:cleared", () => {
      onObjectSelected(null);
    });

    // Load the template based on templateId
    if (templateId) {
      setLoading(true);
      loadTemplate(fabricCanvas, templateId, onTemplateLoaded);
      setLoading(false);
    }

    return () => {
      fabricCanvas.dispose();
    };
  }, [templateId, onCanvasReady, onObjectSelected, onTemplateLoaded]);

  return (
    <div className="relative">
      <div ref={canvasRef} className="shadow-2xl">
        <canvas id="editor-canvas" className="rounded-lg"></canvas>
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
