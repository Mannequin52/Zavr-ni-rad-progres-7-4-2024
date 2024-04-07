var brushPreset = new File("path/to/your/brush.psp");
var brushFile = new File("path/to/save/your/brush.abr");

app.load(brushPreset);
var brushSet = app.activeDocument;
brushSet.trim(TrimType.TRANSPARENT, true, true, true, true);
brushSet.resizeCanvas(brushSet.width + 1, brushSet.height + 1, AnchorPosition.MIDDLECENTER);
brushSet.resizeCanvas(brushSet.width - 1, brushSet.height - 1, AnchorPosition.MIDDLECENTER);
brushSet.resizeCanvas(brushSet.width - 1, brushSet.height - 1, AnchorPosition.MIDDLECENTER);

brushSet.exportCustomShape(brushFile);
alert("Brush saved as " + brushFile.fsName);