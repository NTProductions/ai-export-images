// Illustrator Exporting/Saving Images
var document = app.activeDocument;

// Export Types
document.exportFile(File("~/Documents/test.gif"), ExportType.GIF);
document.exportFile(File("~/Documents/test.jpg"), ExportType.JPEG);
document.exportFile(File("~/Documents/test.png"), ExportType.PNG24);
document.exportFile(File("~/Documents/test.png"), ExportType.PNG8);
document.exportFile(File("~/Documents/test.svg"), ExportType.SVG);
document.exportFile(File("~/Documents/test.tiff"), ExportType.TIFF);

// Save Types
var saveOptions = new IllustratorSaveOptions();
var aiDoc = new File("~/Documents/");
document.saveAs(aiDoc, saveOptions);

var saveOpts = new PDFSaveOptions();
var saveName = new File("~/Documents/");
saveOpts.preserveEditability = true;
document.saveAs(saveName, saveOpts);

alert("done");