// The files in this directory contain functions that handle requests coming to different routes
function coinFlip() {
    let rand = Math.floor(Math.random() * 2);
    if(rand == 1){
      return "heads";
    } 
    else{
      return "tails";
    }
  }

function coinFlips(flips) {
    const results = [];
    for( let i = 0; i < flips; i++ ){
      results[i] = coinFlip();
    }
    return results;
  }

function countFlips(array) {
    let head = 0;
    let tail = 0;
  
    for(let i = 0; i < array.length; i++){
      if(array[i] == 'heads'){
        head++;
      }
      if(array[i] == 'tails'){
        tail++;
      }
    }
  
    if (head == 0) {
      return {"tails": tail};
    }
    else if (tail == 0) {
      return {"heads": head};
    }
  
    return {'heads': head, 'tails': tail}
  }

function flipACoin(call) {
    let f = coinFlip();
    let r = "";
    if(call == f){
      r = "win";
    } else{
      r = "lose";
    }
    
    //let callResult = { call: '${call}', flip: '${f}', result: '${r}' }
    let callResult = { call: call , flip: f , result: r }
    return callResult;
}


// Export functions.
module.exports = { coinFlip, coinFlips, countFlips, flipACoin };