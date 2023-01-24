function displaydata(data){
    result.value+=data
}
function empty(){
    result.value=""
}
function evaluatedataa(){
    result.value=eval(result.value)
}
function del(){
    a=result.value
    result.value=a.slice(0,-1)
}