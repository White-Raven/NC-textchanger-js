$(document).ready(function(){
    var ttlnm = "Site Name | Descriptive stuff";
    let characterIndex = 0;
    let titleNames = [ttlnm, [...],]; /// That's here that you must make the magic happen, be creative!
    
    window.updateTitleName = function () {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length]; 
      // "tittle" being the html title tag, aka what appears as the tab's text in your internet browser
    }
    setInterval(() => {
        window.updateTitleName()
    }, 100);
  
    var hnm = "Site Name";
    let characterIndex2 = 0;
    let headerlines = ["Site Name", " ite Nam ", "  te Na  ", "S  e N  e", "Si     me", "Sit   ame", "Site Name", "S t   a e", " i e N m ",  "S t   a e", " i e N m ",  "S t   a e", " i e N m ", hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm hnm,];
    
  window.updateHeaderName = function () {
        document.getElementById('hnm').innerHTML = headerlines[characterIndex2++ % headerlines.length]; 
      // 'hnm' the element with the hnm ID would be the website's name for example
    }
    setInterval(() => {
        window.updateHeaderName()
    }, 100);
})
