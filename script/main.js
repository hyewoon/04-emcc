$(function(){
		$("#detail").click(function(){
		//	$(".item-detail").removeClass("slow");
			$(".item-detail").removeClass("d-none");
		})
		$("#close").click(function(){
		//	$(".item-detail").addClass("fast");
			$(".item-detail").addClass("d-none");
		})
			/*const toggleSidePanel = document.querySelector("#closePanel");
		 	const SidePanel = document.querySelector("#sidePanel");
		
		 	
		 	toggleSidePanel.$("click", function (){
		 		if(SidePanel.$("collapsed")){
		 		 console.log("있음")
		 			SidePanel.classList.remove("collapsed")
		 		}else {
		 		 console.log("없음")
		 			SidePanel.classList.add("collapsed")
		 		 	
		 		}
		 		//SidePanel.classList.remove("collapsed")
		 	}) */
})