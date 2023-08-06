function getSystemTheme() {  
  if (typeof window.matchMedia === "function") {  
    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");  
    return mediaQuery.active ? mediaQuery.media.mimeType : "unknown";  
  } else {  
    return "unknown";  
  }  
}  
  
var theme = getSystemTheme();  
if (theme === "text/css") {  
  document.body.classList.add("dark-mode");  
} else {  
  document.body.classList.add("light-mode");  
} 
var imageElement = document.getElementById('myImage');  
// 根据系统主题选择不同的图片  
if (isDarkColor(systemThemeColor)) {  
  imageElement.src = "./files/dark_image.png";  
} else {  
  imageElement.src = "./files/light_image.jpeg";
}   
    
  function isDarkColor(color) {  
    var rgb = parseInt(color.substring(5), 16);  
    var r = (rgb >> 16) & 0xff;  
    var g = (rgb >> 8) & 0xff;  
    var b = rgb & 0xff;  
    var luma = 0.299 * r + 0.587 * g + 0.114 * b;  
    return luma < 128;  
  }