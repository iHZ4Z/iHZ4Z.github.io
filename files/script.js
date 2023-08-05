window.onload = function() {  
    var systemThemeColor = window.getComputedStyle(document.body).getPropertyValue('--theme-color');  
    var body = document.body;  
    
    if (isDarkColor(systemThemeColor)) {  
      body.classList.add("dark-mode");  
    } else {  
      body.classList.add("light-mode");  
    }  
    var imageElement = document.getElementById('myImage');  
    
    // 根据系统主题选择不同的图片  
    if (isDarkColor(systemThemeColor)) {  
      imageElement.src = "./files/dark_image.png";  
    } else {  
      imageElement.src = "./files/light_image.png";
    } 
  };  
    
  function isDarkColor(color) {  
    var rgb = parseInt(color.substring(5), 16);  
    var r = (rgb >> 16) & 0xff;  
    var g = (rgb >> 8) & 0xff;  
    var b = rgb & 0xff;  
    var luma = 0.299 * r + 0.587 * g + 0.114 * b;  
    return luma < 128;  
  }