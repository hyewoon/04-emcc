$(function(){
		$("#detail").click(function(){
			$(".item-detail").removeClass("slow");
		})
		$("#close").click(function(){
			$(".item-detail").addClass("fast");
		})
})