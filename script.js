let selectElement=document.getElementById("colorSelect");
let removeButton=document.getElementsByTagName("input")[0];
removeButton.addEventListener("click",()=>{
	var selectedOptionIndex=selectElement.selectedIndex;
	if(selectedOptionIndex!==-1){
		selectElement.removeChild(selectElement.options[selectedOptionIndex])
	}
})