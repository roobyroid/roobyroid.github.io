		//$('.iphone').mask('+9(999) 999-9999', { placeholder: "" }); 
		
		

		$('.fancybox').fancybox();

        $(document).ready(function() { // вся магия после загрузки страницы		
			
			$('#btn-elka90').click(function(){
				$('#treesize').val('Ель 90 см');
			});
			$('#btn-elka120').click(function(){
				$('#treesize').val('Ель 120 см');
			});
			$('#btn-elka150').click(function(){
				$('#treesize').val('Ель 150см');
			});
			$('#btn-elka210').click(function(){
				$('#treesize').val('Ель 210 см');
			});
			$('#btn-elka240').click(function(){
				$('#treesize').val('Ель 240 см');
			});
			
			$('.selectbutton').click(function(){
				$('#treesize').val($('#treeselect').val());
			})
			
			
			
			$('.privacy').click(function(event){
				event.preventDefault();
				$('#overlay_privacy').fadeIn(400,function(){
					$('#modal_privacy').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
				});
			});
			
			$('#modal_close_privacy,#overlay_privacy').click( function(){ // ловим клик по крестику или подложке
				$('#modal_privacy')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay_privacy').fadeOut(400); // скрываем подложку
						}
					);
			});			
			
			$('#modal_close_success,#overlay').click( function(){ // ловим клик по крестику или подложке
				$('#modal_success')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay').fadeOut(400); // скрываем подложку
						}
					);
			});
			
			$('.go').click( function(event){ // ловим клик по ссылки с id="go"
				event.preventDefault(); // выключаем стандартную роль элемента
				$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
					function(){ // после выполнения предъидущей анимации
						$('#modal_form') 
							.css('display', 'block') // убираем у модального окна display: none;
							.animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
				});
			});
			/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
			$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
				$('#treesize').val('');
				$('#modal_form')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay').fadeOut(400); // скрываем подложку
						}
					);
			});


			$('.accessories-balls [name="size"]').on('change', function() {
				var price = $(this).find(':selected').attr('data-price');
				var priceOld = $(this).find(':selected').attr('data-price-old');
		
				if (price)
					$('.accessories-balls .prices .price').show().find('.p').html(price);
				else
					$('.accessories-balls .prices .price').hide();
		
				if (priceOld)
					$('.accessories-balls .prices .price-old').show().find('.p').html(priceOld);
				else
					$('.accessories-balls .prices .price-old').hide();
		
				return false;
			}).trigger('change');
		
			$('.accessories-balls [name="color"]').on('change', function() {
				var img = $(this).find(':selected').attr('data-img');
				$('.accessories-balls .photo img').attr('src', img);
				return false;
			}).trigger('change');
		});

$(function() {
	$('form').on('submit', function(e) {
		
		e.preventDefault();
		
		$.ajax({
			type: 'post',
			url: 'mail.php',
			data: $(this).serialize(),
			success: function() {
				alert('Заяка успешно принята, наш менеджер свяжется с вами!');
			}
		});
	});
}());
