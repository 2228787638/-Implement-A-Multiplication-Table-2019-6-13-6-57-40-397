function isStartNumberSmallerAndEqualEndNumber(startNumber,endNumber){
	return startNumber<=endNumber;
}
function isInRangeof1To1000 (startNumber, endNumber) {
    if(startNumber>=1&&startNumber<=1000&&endNumber>=1&&endNumber<=1000){
        return true;
    }else{
        return false;
    }
}
function generateMultiplicationTable (startNumber, endNumber) {
	var multiplicationTable="";
	for(var j=startNumber;j<=endNumber;j++){
		for(var i=startNumber;i<=j;i++){
			multiplicationTable=multiplicationTable+i+"*"+j+"="+i*j+" ";
		}
	}
    return multiplicationTable;
}
function createMultiplicationTable (startNumber,endNumber) {
	if(isStartNumberSmallerAndEqualEndNumber(startNumber,endNumber)&&
		isInRangeof1To1000 (startNumber, endNumber)){
		return generateMultiplicationTable(startNumber,endNumber);
	}else{
		return null;
	}
}
module.exports = {isStartNumberSmallerAndEqualEndNumber,generateMultiplicationTable,isInRangeof1To1000,createMultiplicationTable};