    $(".earnings__cell ").click(function() {
			$(".earnings__cell ").removeClass("check");
        $(this).toggleClass('check');
    });
    $(".change__coin ").click(function() {
			$(".change__coin").removeClass("check");
        $(this).toggleClass('check');
    }); 
	$(".ton_btn").click(function() {
			$("body,.mining ").removeClass("trx");
			$("body,.mining ").removeClass("btc");
			$("body,.mining").addClass("ton");
			$(".cooler__coin i").removeClass("bitcoin");
			$(".cooler__coin i").removeClass("tron");
			$(".cooler__coin i").addClass("ton");
    });
	$(".tron_btn").click(function() {
			$("body,.mining ").removeClass("ton");
			$("body,.mining ").removeClass("btc");
			$("body,.mining").addClass("trx");
			$(".cooler__coin i").removeClass("tron");
			$(".cooler__coin i").removeClass("ton");
			$(".cooler__coin i").addClass("tron");
    });

	$(".bitcoin_btn").click(function() {
			$("body,.mining ").removeClass("ton");
			$("body,.mining ").removeClass("trx");
			$("body,.mining").addClass("btc");
			$(".cooler__coin i").removeClass("bitcoin");
			$(".cooler__coin i").removeClass("ton");
			$(".cooler__coin i").addClass("bitcoin");
    });
	$(".closemodal").click(function() {
			$(".modal__overflow").removeClass("visible");
    });	
	$("#changeCoin,#swapCoin").click(function() {
			$(".modal__overflow").addClass("visible");
    });