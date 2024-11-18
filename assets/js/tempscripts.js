// const stylesheet = document.getElementById("style");
// stylesheet.onload = () => {
//   print("loaded")
//   function cloneElement() {
//     var html = document.getElementById('set1').innerHTML;
//     var clone = document.createElement('set2');
//     clone.innerHTML = html;
//     document.getElementById('clones').appendChild(clone);
//   }
// };

// stylesheet.onerror = () => {
//   console.log("An error occurred loading the stylesheet!");
// };

// Find all Classes
function getAllByClass(classname, node) {
  if (!document.getElementsByClassName) {
    if (!node) {
      node = document.body;
    }

    var a = [],
      re = new RegExp("\\b" + classname + "\\b"),
      els = node.getElementsByTagName("*");

    for (var i = 0, j = els.length; i < j; i++) {
      if (re.test(els[i].className)) {
        a.push(els[i]);
      }
    }
  } else {
    return document.getElementsByClassName(classname);
  }

  return a;
}

let run = null;
function setupGlitch(term) {
  getAllByClass("term").length;
  for (var i = 0, j = getAllByClass(term).length; i < j; i++) {

    if (run == null) {
      var GlitchDiv = getAllByClass(term)[i];
      run = i + 4;
      setupGlitchP2(GlitchDiv)
    } else {
      var GlitchDiv = getAllByClass(term)[run];
      setupGlitchP2(GlitchDiv)
      run = run + 4;
    }
    function setupGlitchP2(Div) {
      var GlitchDiv = Div;

      var GlitchDivClone = GlitchDiv.cloneNode(true);
      GlitchDivClone.className = GlitchDivClone.className + " gBlue";
      GlitchDiv.insertAdjacentElement("afterend", GlitchDivClone); //Insert Blue "Afterend" of Glitch ID
      var GlitchDivClone = GlitchDiv.cloneNode(true);
      GlitchDivClone.className = GlitchDivClone.className + " gGreen";
      GlitchDiv.insertAdjacentElement("afterend", GlitchDivClone); //Insert Green "Afterend" of Glitch ID
      var GlitchDivClone = GlitchDiv.cloneNode(true);
      GlitchDivClone.className = GlitchDivClone.className + " gRed";
      GlitchDiv.insertAdjacentElement("afterend", GlitchDivClone); //Insert Red "Afterend" of Glitch ID
    }

    console.log("Glitch Applied: "+ parseInt(i+1) + " / " + j + "\n("+ GlitchDiv.className+")");
  }
}

setupGlitch("glitch"); // Enter Class Name