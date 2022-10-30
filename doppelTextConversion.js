function convertDoppelText()
{
    var doppelEffectString = document.getElementById("doppelText").value;
    var effectsArray = doppelEffectString.split(" & ");
	var temp;
	var index = 0;
	
	var resultText = "";
	
	if (effectsArray[0].includes("Damage") && (effectsArray[0].includes("Enemy") || effectsArray[0].includes("Enemies")))
	{
		temp = effectsArray[0].split(" [");
		resultText += "| Magia2 effect 1 = " + temp[0] + "\n| Magia2 1 = " + temp[1].replace("]", "") + "\n";
		index++;
	}
	
	while (index < effectsArray.length)
	{
		temp = effectsArray[index].split(" (");
		resultText += "| Magia2 effect " + (index + 1) + " = " + temp[0] + "\n| Magia2 " + (index + 1) + " = " + temp[1].replace(")", "") + "\n";
		index++;
	}
	
	return resultText;
}
