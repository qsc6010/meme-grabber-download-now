import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Upload, Download, Wand2, Palette, Type, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState([40]);
  const [textColor, setTextColor] = useState("#ffffff");
  const [image, setImage] = useState<string | null>(null);
  const [strokeWidth, setStrokeWidth] = useState([3]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = 800;
      canvas.height = 600;

      // Draw image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `bold ${fontSize[0]}px Impact, Arial Black, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = strokeWidth[0];
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      // Draw top text
      if (topText) {
        const words = topText.toUpperCase().split(" ");
        let lines = [];
        let currentLine = "";

        // Word wrap
        for (let word of words) {
          const testLine = currentLine + word + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > canvas.width - 40 && currentLine !== "") {
            lines.push(currentLine.trim());
            currentLine = word + " ";
          } else {
            currentLine = testLine;
          }
        }
        lines.push(currentLine.trim());

        // Draw lines
        lines.forEach((line, index) => {
          const y = 20 + (index * (fontSize[0] + 5));
          ctx.strokeText(line, canvas.width / 2, y);
          ctx.fillText(line, canvas.width / 2, y);
        });
      }

      // Draw bottom text
      if (bottomText) {
        const words = bottomText.toUpperCase().split(" ");
        let lines = [];
        let currentLine = "";

        // Word wrap
        for (let word of words) {
          const testLine = currentLine + word + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > canvas.width - 40 && currentLine !== "") {
            lines.push(currentLine.trim());
            currentLine = word + " ";
          } else {
            currentLine = testLine;
          }
        }
        lines.push(currentLine.trim());

        // Draw lines from bottom up
        lines.reverse().forEach((line, index) => {
          const y = canvas.height - 20 - (index * (fontSize[0] + 5)) - fontSize[0];
          ctx.strokeText(line, canvas.width / 2, y);
          ctx.fillText(line, canvas.width / 2, y);
        });
      }
    };
    img.src = image;
  };

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      toast({
        title: "Error",
        description: "Please create a meme first!",
        variant: "destructive"
      });
      return;
    }

    // Create download link
    const link = document.createElement("a");
    link.download = `meme-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "Success!",
      description: "Your meme has been downloaded to your computer!",
    });
  };

  // Redraw meme when parameters change
  React.useEffect(() => {
    if (image) {
      drawMeme();
    }
  }, [topText, bottomText, fontSize, textColor, strokeWidth, image]);

  return (
    <section id="create" className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Create Your <span className="text-primary">Viral Meme</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload an image, add your text, and download your meme instantly. No registration required!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Controls */}
          <div className="space-y-6">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Upload Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline" 
                    className="w-full h-20 border-dashed border-2 border-primary/30 hover:border-primary/50"
                  >
                    <Upload className="h-8 w-8 mr-2" />
                    Choose Image
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Text Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="text" className="space-y-4">
                    <div>
                      <Label htmlFor="topText">Top Text</Label>
                      <Input
                        id="topText"
                        value={topText}
                        onChange={(e) => setTopText(e.target.value)}
                        placeholder="Enter top text..."
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="bottomText">Bottom Text</Label>
                      <Input
                        id="bottomText"
                        value={bottomText}
                        onChange={(e) => setBottomText(e.target.value)}
                        placeholder="Enter bottom text..."
                        className="mt-2"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="style" className="space-y-4">
                    <div>
                      <Label htmlFor="fontSize">Font Size: {fontSize[0]}px</Label>
                      <Slider
                        id="fontSize"
                        min={20}
                        max={80}
                        step={5}
                        value={fontSize}
                        onValueChange={setFontSize}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="strokeWidth">Outline Width: {strokeWidth[0]}px</Label>
                      <Slider
                        id="strokeWidth"
                        min={0}
                        max={8}
                        step={1}
                        value={strokeWidth}
                        onValueChange={setStrokeWidth}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="textColor">Text Color</Label>
                      <div className="flex gap-2 mt-2">
                        <input
                          type="color"
                          id="textColor"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-12 h-10 rounded border border-input"
                        />
                        <Input
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          placeholder="#ffffff"
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Button 
              onClick={downloadMeme}
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={!image}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Meme
            </Button>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  {image ? (
                    <canvas
                      ref={canvasRef}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <ImageIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Upload an image to start creating your meme</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;